import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from 'axios';

function TestPage() {
  const apiUrl = 'http://127.0.0.1:8000/storeapi/medicine';

  const [medicineData, setMedicineData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMedicineData, setFilteredMedicineData] = useState([]);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setMedicineData(response.data);
        setFilteredMedicineData(response.data); // Initialize filtered data with all medicines
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = medicineData.filter(medicine =>
      medicine.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredMedicineData(filteredData);
  };

  const pageStyle = {
    backgroundColor: '#ffd1b3',
    minHeight: '100vh', // Ensure the page fills the viewport height
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <br></br>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Medicine"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '16px',
            width: '50%',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
          Search
        </button>
      </div>
      <div className="medicine-container">
        {filteredMedicineData.length > 0 ? (
          <div><br></br>
            <h1 style={{ textAlign: 'center' }}>Medicine List</h1>
            {filteredMedicineData.map(medicine => (
              <div key={medicine.id} style={{ textAlign: 'center' }}>
                <h6>{medicine.name}</h6>
                {/* Add more details or components related to each medicine here */}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: '16px', color: 'red' }}>No matching medicine found.</p>
        )}
      </div>
    </div>
  );
}

export default TestPage;
