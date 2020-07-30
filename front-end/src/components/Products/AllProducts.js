import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services';
import '../../styles/AllProducts.css';

const setCart = (product) => (
  JSON.parse(localStorage.getItem('cart'))
    ? localStorage
      .setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart')), product]))
    : localStorage
      .setItem('cart', JSON.stringify([product]))
);

const removeCart = (product) => {
  const getCart = localStorage.getItem('cart') || null;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((doc) => setProducts(doc.data.products));
  }, []);

  return (
    <div className="AllProducts_father">
      {products.map((product) => {
        const { name, price, picture } = product;
        return (
          <div
            className="Product_only"
            key={`${name} option`}
          >
            <img className="Products_img" alt='show beer selection' src={picture} />
            <p>{`R$ ${Number(price).toFixed(2)}`}</p>
            <p>{name}</p>
            <div>
              <button type="button" onClick={() => setCart(product)}>+</button>
              <button type="button" onClick={() => console.log(product)}>-</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
