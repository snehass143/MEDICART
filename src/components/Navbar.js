import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



function Navbar() {
    var user= useSelector(store => store.auth.user);
    return <nav className="navbar navbar-expand-sm navbar-dark bg-info">
        <div className="navbar-brand">
        <NavLink to="/" className="navbar-brand">
          <h4>MEDICART</h4>
        </NavLink>
        </div>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse mr-auto"
        id="navbarNav"
        style={{ float: "left" }}
        >
            <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
               {user? 
                <li className="nav-item">
                <NavLink 
                to={"/app"} 
                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    Home
                </NavLink>
                </li>:
                  <li className='nav-item'>
                  <span className={'nav-link'}></span>
                </li> }
                
               {user?
               <li className="nav-item">
                <NavLink 
                to={"/aboutus"}

                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                    About 
                </NavLink>
              </li>:
                <li className='nav-item'>
                  <span className={'nav-link'}></span>
                </li> }


       {user?
                <li className="nav-item">
                <NavLink 
                to={"/addmed"} 
                className={
                    'nav-link '+
                    (status => status.isActive ? 'active' : '')
                } 
                >
                  Add Medicine
                </NavLink>
                </li>:
                  <li className='nav-item'>
                  <span className={'nav-link'}></span>
                </li> }


       {user?
                <li className="nav-item">
             <NavLink
    to="/list"
    activeClassName="active" // Apply the "active" class when the link is active
    className="nav-link"
  >
    Medicine List
  </NavLink>
</li>:
  <li className='nav-item'>
  <span className={'nav-link'}></span>
         </li> }            

                  {user? 
                 <li className="nav-item">
                    <NavLink to={"/logout"} className="nav-link">
                        logout
                    </NavLink>
                </li>:
                  <li className='nav-item'>
                  <span className={'nav-link'}></span>
                </li> }
            </ul>
        </div>
    </nav>;
}

export default Navbar;