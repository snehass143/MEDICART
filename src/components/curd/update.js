import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import checkAuth from "../auth/checkAuth";

function Update() {
    const navigate = useNavigate();
    const [name, setname] = useState('');
    const [company, setcompany] = useState('');
    const [expiry_date, setexpiry_date] = useState('');
    const [price, setprice] = useState('');
    const [quantity, setquantity] = useState('');
    const user = useSelector(store => store.auth.user);
    const token = user.token;
    const { id } = useParams();
    const url = `http://127.0.0.1:8000/storeapi/medicines/${id}`;

    useEffect(() => {
        // Fetch medicine details and set them as initial values
        axios.get(url, { headers: { Authorization: "Token " + token } })
            .then((response) => {
                const medicineData = response.data;
                setname(medicineData.name);
                setcompany(medicineData.company);
                setexpiry_date(medicineData.expiry_date);
                setprice(medicineData.price);
                setquantity(medicineData.quantity);

            })
            .catch((error) => {
                console.error("Error fetching medicine details:", error);
            });
    }, [url, token]);

    function postMed() {
        axios.put(url, {
            name: name,
            company: company,
            expiry_date: expiry_date,
            price: price,
            quantity: quantity
        }, { headers: { Authorization: "Token " + token } })
            .then(() => {
                navigate('/list');
            })
            .catch((error) => {
                console.error("Error updating medicine:", error);
            });
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-5 mx-auto d-block mt-5 form-group">
                        <h2 className="mb-5 text-center">Edit Medicine</h2>
                        <form>
                            <label>Name:</label>
                            <input
                                value={name}
                                onChange={(event) => { setname(event.target.value) }}
                                placeholder="Name of med"
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
                            />
                            <label>Price:</label>
                            <input
                                value={price}
                                onChange={(event) => { setprice(event.target.value) }}
                                type="number"
                                className="form-control"
                            />
                            <label>Quantity:</label>
                            <input
                                value={quantity}
                                onChange={(event) => { setquantity(event.target.value) }}
                                type="number"
                                className="form-control"
                            />
                            <button
                                type="button"
                                onClick={postMed}
                                className="btn btn-info mt-3 mx-auto d-block"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(Update);
