import React from 'react';

export default function Product({ product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: {product.price} USD</p>
          <p className="card-text">Code: {product.code}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
