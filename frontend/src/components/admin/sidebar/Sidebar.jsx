import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
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
    localStorage.removeItem('admin');
    localStorage.removeItem('adminToken');
    navigate('/')
}

  return (
    <div className="adminSidebar">
      <div className="adminTop">
        <Link to="/admin/home" style={{ textDecoration: "none" }}>
          <span className="adminLogo">JK Rooms</span>
        </Link>
      </div>
      <hr />
      <div className="adminCenter">
        <ul>
          <p className="adminTitle">MAIN</p>
          <li>
            <DashboardIcon className="adminIcon" />
            <span>Dashboard</span>
          </li>
          <p className="adminTitle">LISTS</p>

          <Link to="/admin/userslist" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="adminIcon" />
              <span>Users</span>
            </li>
          </Link>
          
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="adminIcon" />
              <span>Hotels</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="adminIcon" />
            <button className="logoutButn" onClick={logoutfn}>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      {/* <div className="adminBottom">
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
