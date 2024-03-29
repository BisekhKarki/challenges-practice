import React from "react";
import { Link } from "react-router-dom";
import  "../styles/heading.css";

function Header() {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>  
        </div>
        <div className="underline"></div>
        <div className="nav">
          <Link to={"/homeFour"}>00 Home</Link>
          <Link to={"/destination"}> 01 Destination</Link>
          <Link to={"/crew"}>02 Crew</Link>
          <Link to={"/technology"}>03 Technology</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
