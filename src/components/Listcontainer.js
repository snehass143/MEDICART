import React, { useEffect, useState } from "react";
import List from "./listview";
import axios from "axios";
import { setlist } from "../store/listslice";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Search from "./curd/search";
import checkAuth from "./auth/checkAuth";

function Listcontainer() {
    var navigate = useNavigate();
    var dispatch = useDispatch();
    var user = useSelector(state => state.auth.user);
    var [token, setToken] = useState(null);
    var [isLoading, setIsLoading] = useState(true);
    var [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            setToken(user.token);
        } else {
            var storedUser = JSON.parse(window.localStorage.getItem('user'));
            if (storedUser) {
                setToken(storedUser.token);
            } else {
                navigate('/');
            }
        }
    }, [user, navigate]);

    useEffect(() => {
        if (token) {
            axios.get('http://127.0.0.1:8000/storeapi/medicine', { headers: { Authorization: "Token " + token } })
                .then((response) => {
                    var a = response.data;
                    dispatch(setlist(a));
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setIsLoading(false);
                });
        }
    }, [token, dispatch]);

    var value = useSelector(store => store.list);

    return (
        <div className="list-container">
            <Navbar />
            <div className="row mt-5">
                <div className="col">
                    <Search />
                    <h3 className="mt-5">List view</h3>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error.message}</p>
                    ) : (
                        <div>
                            {value.map((list) => (
                                <List list={list} key={list.id} />
                            ))}
                        </div>
                    )}
                </div>
                <div className="col d-none d-lg-block li"></div>
            </div>
        </div>
    );
}

export default checkAuth(Listcontainer);