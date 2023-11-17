import React, { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux'; 
import Navbar from './components/Navbar';
import appbg from './appbg.png';
import checkAuth from './components/auth/checkAuth';

function App() {
  const imageStyles = {
    maxWidth: '400px'
  };
  // Use useSelector to access the user's email from the Redux store
  const user = useSelector((state) => state.auth.user);

  // Use state to store the current date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  // Update the current date and time every second

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              Welcome to <b>MEDICART</b>
            </h2>
            <h5>
              {user && <span> User: {user.email}</span>}
            </h5>
            <p> {currentDateTime.toLocaleString()}</p>
            <h4>"Your Trusted Destination for Health and Wellness"</h4>
            <img src={appbg} alt='appbg.png' style={imageStyles} />
          </div>
        </div>
      </div>
      </div>
  );
}

export default checkAuth(App);
