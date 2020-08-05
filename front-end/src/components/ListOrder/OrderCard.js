import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard(order) {
  const {
    orderId, adress, total, deliver,
  } = order.order;
  return (
    <Link to={`/admin/orders/${orderId}`}>
      <div className="order-card">
        <div>{`Pedido ${orderId}`}</div>
        <div>{adress}</div>
        <div>{`R$ ${total.toFixed(2)}`}</div>
        <div>{deliver ? 'Entregue' : 'Pendente'}</div>
      </div>
    </Link>
  );
}
