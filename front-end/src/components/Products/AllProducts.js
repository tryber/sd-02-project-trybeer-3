import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services';
import '../../styles/AllProducts.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((doc) => setProducts(doc.data.products));
  }, []);

  return (
    <div className="AllProducts_father">
      {products.map(({ name, price }) => (
        <div
          className="Product_only"
          key={`${name} option`}
        >
          <p>{`R$ ${Number(price).toFixed(2)}`}</p>
          <p>{name}</p>
          <button type="button">+</button>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
