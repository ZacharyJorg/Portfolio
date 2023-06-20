import React, { useState, useEffect } from "react";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          position: "fixed",
          top: showNavbar ? "0" : "-50px",
          left: "0",
          right: "0",
          width: "100%",
          height: "50px",
          backgroundColor: "#f2f2f2",
          transition: "top 0.3s",
        }}
        id="navbar"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ZJ
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-warning" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
