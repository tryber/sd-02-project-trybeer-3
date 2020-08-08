import React, { useContext } from 'react';
import Trybeer from '../../context';

const ShowDetails = () => {
  const { orderDetail } = useContext(Trybeer);
  return orderDetail.products ? (
    <div>
      <p>{`Pedido ${orderDetail.orderId}`}</p>
      <p>{`${orderDetail.day}/${orderDetail.month}`}</p>
      {orderDetail.products.map((product) => (
        <div key={`${product.name} data`}>
          <p>{`${product.qty} - ${product.name}`}</p>
          <p>{`Preço: R$ ${product.price.toFixed(2)}`}</p>
          <p>{`Total: R$ ${product.total.toFixed(2)}`}</p>
        </div>
      ))}
      <p>{`Valor Total do pedido: R$ ${orderDetail.total.toFixed(2)}`}</p>
    </div>
  ) : <p>Loading</p>;
};

export default ShowDetails;
