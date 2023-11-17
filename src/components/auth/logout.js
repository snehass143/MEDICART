import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deluser } from "../../store/authSlice";

function Logout() {
    var user = useSelector(store => store.auth);
    var navigate = useNavigate();
    var tokenn = user.token
    var dispatch = useDispatch();
    axios.post('http://127.0.0.1:8000/storeapi/logout', { headers: { Authorization: "Token " + tokenn } }).then(
        dispatch(deluser(user))).catch(() => navigate('/'))

    return <div className="col">
        <h3 className="text-success align-center">Logout successful</h3>
    </div>
}

export default Logout;