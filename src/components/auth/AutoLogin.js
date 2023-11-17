import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setuserfromlocal } from "../../store/authSlice";


function Autologin(props) {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(setuserfromlocal()) }, [])
    return props.children
}
export default Autologin;