import React from "react";
import { useNavigate } from "react-router-dom";
import "./beforelogin.css";

function Banner() {
   const navigate = useNavigate();

  const loginform = () => {
    navigate("/Login");
  };

  return (
    <div className="banner">
      <div className="banner_content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="banner_input">
          <input type="email" placeholder="Email address" />
          <button onClick={loginform} >Get Started</button>
        </div>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
}

export default Banner;