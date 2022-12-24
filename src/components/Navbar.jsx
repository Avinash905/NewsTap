import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg navbar-dark bg-danger sticky-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none" to="/NewsTap/">
            NewsTap
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/"
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/business"
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/health"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/science"
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/NewsTap/technology"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
