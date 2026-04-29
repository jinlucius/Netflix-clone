import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ page }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/Dashboard"); // ✅ redirect
  };

  return (
    <div className="login">
      <div className="login_box">
        <h1>{page === "login" ? "Sign In" : "Sign Up"}</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">{page === "login" ? "Sign In" : "Sign Up"}</button>
        </form>

        <p>
          {page === "login" ? "New to Netflix?" : "Already have an account?"} 
          
          <span onClick={() => navigate(page === "login" ? "/register" : "/Login")}>
            {page === "login" ? " Sign Up now." : " Sign In here."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;