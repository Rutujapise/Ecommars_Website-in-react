import React, { useContext } from "react";
import { CreateTheme } from "../Context/ThemeProvider";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(CreateTheme);
  const { loggedUser, logout } = useContext(AuthContext);
  const { state } = useContext(CartContext);

  // count items in cart
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/dashboard">
          E-Store
        </Link>

        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex align-items-center gap-3">
          {/* Cart Button */}
          

          {/* User info */}
          {loggedUser && (
            <>
              <span
                className="fw-semibold"
                style={{
                  color: theme === "dark" ? "#ffcc00" : "#333",
                  fontWeight: "bold",
                }}
              >
                {loggedUser.name}
              </span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={logout}
              >
                Logout
              </button>
              <Link
            to="/cart"
            className="btn btn-outline-primary position-relative"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.7rem" }}
              >
                {cartCount}
              </span>
            )}
          </Link>
            </>
            
          )}

          {/* Theme toggle */}
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={toggleTheme}
          >
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
