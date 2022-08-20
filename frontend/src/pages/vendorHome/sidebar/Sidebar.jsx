import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const logoutfn = () => {
    localStorage.removeItem('hotel');
    localStorage.removeItem('vendorToken');
    navigate('/vendor')
}

  return (
    <div className="vsSidebar">
      <div className="vsTop">
        <Link to="/vendor/home" style={{ textDecoration: "none" }}>
          <span className="vsLogo">JK Rooms</span>
        </Link>
      </div>
      <hr />
      <div className="vsCenter">
        <ul>
         
          <p className="vsTitle">LISTS</p>

          <Link to="/admin/userslist" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="vsIcon" />
              <span>Users</span>
            </li>
          </Link>
          
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="vsIcon" />
              <span>My Hotel</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="vsIcon" />
            <button className="vsLogoutButn" onClick={logoutfn}>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="vsBottom">
        <div
          className="adminColorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="adminColorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
