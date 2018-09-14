import React, { Component } from "react";
import axios from "axios";

const login = axios
  .get("/auth/google")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })
  .then(function() {
    // always executed
    console.log("Login In!!!!");
  });

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              Gamerz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Players
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Console
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      PS4
                    </a>
                    <a className="dropdown-item" href="#">
                      Xbox
                    </a>
                    <a className="dropdown-item" href="#">
                      PC
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={login}>
                    Google Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
