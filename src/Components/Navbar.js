import React from "react";
import worldLogo from "../Resources/globe-icon.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img className="nav-globe" src={worldLogo} alt="" />
      <p className="nav-heading">My Travel Journal.</p>
    </div>
  );
}
