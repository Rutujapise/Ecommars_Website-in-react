import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

export default function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const { cart, totalPrice } = state;

  if (cart.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary mt-3">Go shopping</Link>
      </div>
    );
  }
   

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          className="d-flex align-items-center justify-content-between border rounded p-3 mb-3"
          key={item.id}
        >
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 64, height: 64, objectFit: "cover" }}
              className="rounded me-3"
            />
            <div>
              <h5 className="mb-1">{item.name}</h5>
              <div className="text-muted">₹{item.price} × {item.qty}</div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="me-3 fw-semibold">₹{item.price * item.qty}</div>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex align-items-center justify-content-between mt-4">
        <h4>Total: ₹{totalPrice}</h4>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => dispatch({ type: "EMPTY_CART" })}
          >
            Empty Cart
          </button>
    
        </div>
      </div>
    </div>
  );
}
