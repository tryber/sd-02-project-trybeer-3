import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services';
import '../../styles/AllProducts.css';

const getCart = () => {
  const item = localStorage.getItem('cart');
  if (!item) return {};
  return JSON.parse(item);
};

const setCart = (value) => localStorage.setItem('cart', JSON.stringify(value));

const addProduct = (product, setCartProducts) => {
  const { productId, name, price } = product;
  const cart = getCart();

  if (cart[productId]) {
    cart[productId].quantity++;
    setCartProducts(cart);
    return setCart(cart);
  }

  cart[productId] = { name, price, quantity: 1 };
  setCartProducts(cart);
  return setCart(cart);
};

const removeProduct = ({ productId }, setCartProducts) => {
  const cart = getCart();

  if (!cart[productId]) return;

  if (cart[productId].quantity > 1) {
    cart[productId].quantity--;
    setCartProducts(cart);
    return setCart(cart);
  }

  cart[productId] = undefined;
  setCartProducts(cart);
  setCart(cart);
};

const getProductQuantity = ({ productId }, cart) => {
  const prod = cart[productId];
  return prod ? prod.quantity : 0;
};

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(getCart());

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
              <button type="button" onClick={() => addProduct(product, setCartProducts)}>
                +
              </button>
              <p>{getProductQuantity(product, cartProducts)}</p>
              <button type="button" onClick={() => removeProduct(product, setCartProducts)}>
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
