import React, { useState, useEffect } from 'react';
import Product from './Product';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const menProducts = products.filter(p => p.name_category === 'Thoi trang nam');
  const womenProducts = products.filter(p => p.name_category === 'Thoi trang nu');

  return (
    <div className="container">
      <h2>THỜI TRANG NAM</h2>
      <div className="row">
        {menProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <h2>THỜI TRANG NỮ</h2>
      <div className="row">
        {womenProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
