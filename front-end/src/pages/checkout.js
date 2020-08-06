import React, { useState, useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { sendToOrderAPI } from '../services';
import { getCart } from '../components/Utils/cart';
import Trybeer from '../context';
import '../styles/checkout.css';
import '../styles/adminOrders.css';

const sendToOrder = async (street, streetNumber, setError, setRedirect, setCartProducts) => {
  try {
    const cart = Object.values(JSON.parse(localStorage.getItem('cart')));
    const ids = Object.keys(JSON.parse(localStorage.getItem('cart')));
    const { token } = JSON.parse(localStorage.getItem('user'));
    const products = cart.map(({ quantity }, index) => ({
      quantity, id: Number(ids[index]),
    }));
    const obj = {
      street, streetNumber, products,
    };
    await sendToOrderAPI(token, obj);
    setRedirect(true);
    setCartProducts(getCart);
  } catch (error) {
    setError(true);
  }
};

const adress = (setStreet, setNumber) => (
  <div>
    <label htmlFor="street">Rua:</label>
    <input
      id="street"
      name="street"
      type="text"
      data-testid="street-input"
      onChange={(event) => setStreet(event.target.value)}
    />
    <label htmlFor="number">Número:</label>
    <input
      id="number"
      name="number"
      type="number"
      data-testid="number-input"
      onChange={(event) => setNumber(event.target.value)}
    />
  </div>
);

const errorDetailed = () => (
  <div>Erro nos dados</div>
);

export default function Checkout() {
  const { setCartProducts } = useContext(Trybeer);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  if (!localStorage.getItem('user') || !localStorage.getItem('cart')) {
    return <Redirect to="/login" />;
  }
  const cart = Object.values(JSON.parse(localStorage.getItem('cart')));
  if (redirect) {
    localStorage.removeItem('cart');
    history.push('/products');
  }
  return (
    <div>
      <div className="title-orders">Produtos</div>
      <div className="container-checkout">
        {cart.map(({ name, quantity, price }) => (
          <div className="container-detailed-checkout" key={name}>
            <div>{`${quantity} - ${name}`}</div>
            <div>{`R$ ${(quantity * price).toFixed(2)}`}</div>
          </div>
        ))}
        <div>Total: </div>
      </div>
      {adress(setStreet, setNumber)}
      <button
        type="button"
        onClick={() => sendToOrder(street, number, setError, setRedirect, setCartProducts)}
      >
        Finalizar pedido
        </button>
      {error ? errorDetailed() : ''}
    </div>
  );
}
