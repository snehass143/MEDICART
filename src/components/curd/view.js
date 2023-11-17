import { Fragment } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"


function Viewmed() {
    const params = useParams();
    const id = params.id;
    const data = useSelector((store) => store.list);
    const val = data.find((item) => item.id === id);

    // Determine the color based on the expiry date
    const isExpired = new Date(val.expiry_date) < new Date();
    const nameColor = isExpired ? "red" : "green";

    return (
        <Fragment>
            <div>
                <div className="row">
                    <div className="col col-12">
                        <Navbar />
                    </div>
                </div>

                <div className="row">
                    <div className="col mx-auto d-block bg-light mt-5">
                        <h2 className="bg-info rounded text-white text-center">Details of {val.name}</h2>
                        <h3>Name: <span style={{ color: nameColor }}>{val.name}</span></h3>
                        <h3>Company: {val.company}</h3>
                        <h3>Expiry Date: {val.expiry_date}</h3>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Viewmed;
