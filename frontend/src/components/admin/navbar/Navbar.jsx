import "./navbar.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="adminNavbar">
      <div className="adminWrapper">
        {/* <div className="adminSearch">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon /> 
        </div> */}
        <div className="adminItems">
          
          {/* <div className="adminItem">
            <LanguageOutlinedIcon className="adminIcon" />
            English
          </div> 
          <div className="adminItem">
            <DarkModeOutlinedIcon
              className="adminIcon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="adminItem">
            <FullscreenExitOutlinedIcon className="adminIcon" />
          </div>
          <div className="adminItem">
            <NotificationsNoneOutlinedIcon className="adminIcon" />
            <div className="adminCounter">1</div>
          </div>
          <div className="adminItem">
            <ChatBubbleOutlineOutlinedIcon className="adminIcon" />
            <div className="adminCounter">2</div>
          </div>
          <div className="adminItem">
            <ListOutlinedIcon className="adminIcon" />
          </div>
          <div className="adminItem">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="adminAvatar"
            />
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
