import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsearch } from "../../store/searchslice";
import { useNavigate } from "react-router-dom";


function Search() {
    var [query, setquery] = useState('');
    var navigate = useNavigate();
    var user = useSelector(store => store.auth.user);
    var dispatch = useDispatch();

    function fetch() {
        var tokenn = user.token;
        var url = 'https://medicalstore.mashupstack.com/api/medicine/search?keyword=' + query;

        axios.get(url, { headers: { Authorization: "Bearer " + tokenn } })
            .then((response) => {
                var allMedicines = response.data;
                // Filter medicines whose names start with the query
                var filteredMedicines = allMedicines.filter((medicine) =>
                    medicine.name.toLowerCase().startsWith(query.toLowerCase())
                );
                dispatch(setsearch(filteredMedicines));
                navigate('/search');
            })
            .catch((error) => {
                console.error("Error fetching medicines:", error);
            });
    }

    return (
        <div className="input-group">
            <input
                value={query}
                onChange={(event) => { setquery(event.target.value) }}
                type="text"
                placeholder="Search Medicine by first letter"
                className="form-control"
            />
            <button onClick={fetch} className="btn btn-info">Search</button>
        </div>
    );
}

export default Search;
