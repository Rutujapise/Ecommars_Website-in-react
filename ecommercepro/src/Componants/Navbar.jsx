import React, { useContext } from "react";
import { CreateTheme } from "../Context/ThemeProvider";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(CreateTheme);
  const { loggedUser, logout } = useContext(AuthContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Navbar
        </Link>

        {/* Navbar toggler (mobile view) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       

        {/* Right side (User info + Theme toggle) */}
        <div className="d-flex align-items-center gap-3">
          {loggedUser && (
            <>
              <span className="fw-semibold"  style={{
                  color: theme === "dark" ? "#ffcc00" : "#333", // Yellow in dark mode, dark grey in light mode
                  fontWeight: "bold",
                }}>{loggedUser.name}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                Logout
              </button>
            </>
          )}

          {/* Theme toggle */}
          <button className="btn btn-outline-secondary btn-sm" onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="fa-solid fa-toggle-off"></i>
            ) : (
              <i className="fa-solid fa-toggle-on"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
