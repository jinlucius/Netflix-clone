import React from "react";
import "./Dashboard.css";
import Header from "../headers/before login/Header.js"; // same header with prop
import Row from "./Rows.js";


function Dashboard() {
  return (
    <div className="dashboard">
      <Header isLoggedIn={true} />

      {/* Hero Banner */}
      <div className="hero">
        <div className="hero_content">
          <h1>Mortal Kombat</h1>
          <p>
            When MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero</p>
          <div className="hero_buttons">
            <button className="play">▶ Play</button>
            <button className="info">More Info</button>
          </div>
        </div>
      </div>
     

      {/* Rows */}
      <Row title="Trending Now" fetchUrl="trending" />
      <Row title="Top Rated" fetchUrl="top_rated" />
      <Row title="Action Movies" fetchUrl="popular" />
      <Row title="Comedy Movies" fetchUrl="upcoming" />
      <Row title="Originals Movies" fetchUrl="originals" />

    </div>
  );
}

export default Dashboard;