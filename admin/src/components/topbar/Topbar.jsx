import React from "react";
import "./topbar.css";
import { ExitToApp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state";

export default function Topbar() {
  const dispatch = useDispatch();

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Japanese Cuisine Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <ExitToApp onClick={() => dispatch(setLogout())}/>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
