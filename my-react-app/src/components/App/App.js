import React from "react";
import {BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-white bg-primary" : ""}`
                }
                style={{ cursor: "pointer" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-white bg-success" : ""}`
                }
                style={{ cursor: "pointer" }} 
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-white bg-danger" : ""}`
                }
                style={{ cursor: "pointer" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;