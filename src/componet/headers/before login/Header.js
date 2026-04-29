import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../before login/Header.css";

function Header({ isLoggedIn }) {
  const navigate = useNavigate();

  const loginform = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="header">

      <Link to="/">
        <img
          className="header_logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </Link>

      {/* ✅ Menu sirf login ke baad */}
      {isLoggedIn && (
        <div className="header_menu">
         <a href="#home">Home</a>
         <a href="#tvshows">TV Shows</a>
         <a href="#movies"> Movies</a>
         <a href="#new">New & Popular</a>
         <a href="#mylist">My List</a>
            
        </div>
      )}

      <div className="header_buttons">

        {!isLoggedIn ? (
          <>
            <select className="dropdown">
              <option>English</option>
              <option>Hindi</option>
            </select>

            <button className="header_button" onClick={loginform}>
              Sign In
            </button>
          </>
        ) : (
          <>
            <button className="header_button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Header;