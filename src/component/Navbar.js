import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const value = useSelector((state) => state.card);
  return (
    <div className="nav1">
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////
    // <div id="div">
    //   <span id="logo">Redux </span>
    //   <div>
    //     <Link classNameName="nav" to="/">Home</Link>
    //     <Link to="/card">Card</Link>
    //   </div>
    //   <span id="count">card count:{value.length}</span>
    // </div>


    ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Redux store
          </Link>
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
                <Link id="home" className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                id="home"
                  className="nav-link active"
                  aria-current="page"
                  to="/card"
                >
                  Card
                </Link>
              </li>
            </ul>

            <button className="btn btn-outline-warning" type="submit">
              card count:{value.length}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
