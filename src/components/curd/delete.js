import axios from "axios";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dellist } from "../../store/listslice"
import checkAuth from "../auth/checkAuth";
function Delete(props) {
    var dispatch = useDispatch();
    var user = useSelector((store) => store.auth.user);
    var token = user.token;

    const [isConfirming, setIsConfirming] = useState(false);

    function Del() {
        var url = 'http://127.0.0.1:8000/storeapi/medicines/';
        var id = props.id;
        var url1 = url + id;

        axios
            .delete(url1, { headers: { Authorization: "Token " + token } })
            .then(() => {
                dispatch(dellist(id));
                setIsConfirming(false); // Close the confirmation dialog after successful deletion
            })
            .catch((error) => {
                // Handle errors here
                console.error(error);
            });
    }

    return (
        <>
            <button
                onClick={() => setIsConfirming(true)} // show dialog
                className="btn btn-danger mb-1 mt-1"
                data-toggle="modal"
                data-target="#exampleModal"
            >
                Delete
            </button>

            {isConfirming && (
                <div className="modal fade show" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmation</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setIsConfirming(false)}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete this item?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                    onClick={() => setIsConfirming(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={Del}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ >
    );
}

export default checkAuth (Delete);