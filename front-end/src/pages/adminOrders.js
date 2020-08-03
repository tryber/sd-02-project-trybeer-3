import React, { useState, useEffect } from 'react';
import OrderCard from '../components/ListOrder/OrderCard';
import { getAdminOrders } from '../services/index';
import '../styles/adminOrders.css';

const sortingFunc = (a, b) => {
  if (a.deliver > b.deliver) {
    return 1;
  }
  if (a.deliver < b.deliver) {
    return -1;
  }
  return 0;
};

export default function Login() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const ordersAdmin = await getAdminOrders(token);
      setOrders(ordersAdmin.data.orders.sort(sortingFunc));
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <div>Pedidos</div>
      <div className="container-orders">
        {orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </div>
  );
}
