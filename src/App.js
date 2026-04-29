import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from './componet/banner/beforelogin';
import Header from './componet/headers/before login/Header';
import Login from './componet/Login/login';
import Dashboard from './componet/Dashboard/Dashboard';

function App() {
  return (
    <Router>   {/* 🔥 Router wrap */}
      <Routes>

        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <div className="App">
            <Header isLoggedIn={false} />
              <Banner />
            </div>
          } 
        />

        {/* Login Page */}
        <Route path="/Login" element={
          <>
          <Login  page="login"/>
           <Header isLoggedIn={false} />
          </>
          
      } />

       
          {/* Register Page */}

        <Route path="/register" element={
          <>
          <Login  page="register"/>
           <Header isLoggedIn={false} />
          </>
          
      } />

        {/* Dashboard Page */}
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;