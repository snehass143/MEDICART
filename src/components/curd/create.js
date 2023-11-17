import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkAuth from "../auth/checkAuth";

function Addmed() {
    var navigate = useNavigate();
    var [name, setname] = useState('');
    var [company, setcompany] = useState('');
    var [expiry_date, setexpiry_date] = useState('');
    var [price, setprice] = useState('');
    var [quantity, setquantity] = useState('');
    var user = useSelector(store => store.auth.user);
    var token = user.token;

    function postmed(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        axios.post('http://127.0.0.1:8000/storeapi/medicine', {
            name: name,
            company: company,
            expiry_date: expiry_date,
            price: price,
            quantity: quantity

        }, { headers: { Authorization: "Token " + token } })
            .then(() => {
                navigate('/list');
            })
            .catch(error => {
                console.error("Error adding medicine:", error);
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-5 mx-auto d-block mt-5 form-group">
                        <h2 className="mb-5 text-center">Add Medicine</h2>
                        <form onSubmit={postmed}>
                            <label>Name:</label>
                            <input
                                value={name}
                                onChange={(event) => { setname(event.target.value) }}
                                type="text"
                                className="form-control"
                                required
                            />
                            <label>Company:</label>
                            <input
                                value={company}
                                onChange={(event) => { setcompany(event.target.value) }}
                                type="text"
                                className="form-control"
                                required
                            />
                            <label>Expiry date:</label>
                            <input
                                value={expiry_date}
                                onChange={(event) => { setexpiry_date(event.target.value) }}
                                type="date"
                                className="form-control"
                                required
                            />
                            <label>Price:</label>
                            <input
                                value={price}
                                onChange={(event) => { setprice(event.target.value) }}
                                type="number"
                                className="form-control"
                                required
                            />
                            <label>Quantity:</label>
                            <input
                                value={quantity}
                                onChange={(event) => { setquantity(event.target.value) }}
                                type="number"
                                className="form-control"
                                required
                            />
                            <button type="submit" className="btn btn-info mt-3 mx-auto d-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth (Addmed);
