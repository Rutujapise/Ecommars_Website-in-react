import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import productList from '../data';

const ProductInfo = () => {
  const { ID } = useParams(); // ID will be a string
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productList.find((p) => p.id === ID);
    if (!selectedProduct) {
      console.log('Product not found');
    } else {
      setProduct(selectedProduct);
    }
  }, [ID]);

  if (!product) {
    return (
      <div className="text-center my-5">
        <h2>🔍 Product not found!</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>

          <div className="col-md-6">
            <h1 className="display-5 fw-bold">{product.name}</h1>
            <p className="text-muted fs-5">{product.category}</p>
            <p className="lead">{product.description}</p>

            <div className="mb-3">
              <span className="fs-4 text-success">₹{product.discountedPrice}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-decoration-line-through text-muted ms-2">
                    ₹{product.price}
                  </span>
                  <span className="badge bg-danger ms-2">-{product.discount}%</span>
                </>
              )}
            </div>

            <div className="mb-3">
              <span className="badge bg-primary fs-6">
                ⭐ Rating: {product.rating}%
              </span>
            </div>

            <button className="btn btn-success btn-lg mt-3">Add to Cart</button>
            <div className="mt-3">
              <Link to="likes" className="btn btn-outline-primary me-2">Likes</Link>
              <Link to="reviews" className="btn btn-outline-secondary">Reviews</Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="likes" element={<Likes />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

function Likes() {
  return (
    <div className="mb-3 text-center">
      <span className="badge bg-success fs-5">👍 1024 Likes!</span>
    </div>
  );
}

function Reviews() {
  return (
    <div className="mb-3 text-center">
      <div className="badge bg-info fs-6">
        <h4>User123</h4>
        <p className="lead">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
}

export default ProductInfo;
