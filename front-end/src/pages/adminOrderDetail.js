import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderAdminDetail } from '../services';
import '../styles/adminOrders.css';

export default function OrderDetail() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchOrderDetail = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const orderAdmin = await getOrderAdminDetail(token, id);
      setOrder(orderAdmin.data);
    };
    fetchOrderDetail();
  }, [id]);

  // if ()

  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
