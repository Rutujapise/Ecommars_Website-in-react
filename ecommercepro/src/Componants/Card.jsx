import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartProvider";

const Card = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>

        {product.discount > 0 ? (
          <p>
            Price : ₹<del>{product.price}</del>
            <span className="ps-3">₹{product.discountedPrice}</span>
          </p>
        ) : (
          <p>Price : ₹{product.price}</p>
        )}

        <Link
          to={`/dashboard/${product.id}`}
          className="btn btn-primary me-2"
        >
          View More
        </Link>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
