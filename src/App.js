import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Glasses from './trl(3).png';

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Banner from "./components/start";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
        <Routes>
          <Route exact path="/" element={<Banner />} />
          <Route path="/banner" element={<Banner />} />
          
          <Route path="/sign-in" element={<Login />} /> 
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
          {/*</div>*/}
        </div>
      </div>
    </Router>
  );
}

export default App;
