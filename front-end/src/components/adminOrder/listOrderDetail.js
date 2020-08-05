import React from 'react';

export default function ListOrderDetailed(order) {
  const { orderId, deliver, total, products } = order.order;
  console.log(products);
  return (
    <div>
      <div>{`Pedido ${orderId} - ${deliver ? 'Entregue' : 'Pendente'}`}</div>
      <div>
        {products.map((product) => (
          <div key={product.name}>
            <div>{product.qty}</div>
            <div>{product.name}</div>
            <div>{product.total}</div>
          </div>
        ))}
      </div>
      <div>{`Total: ${total.toFixed(2)}`}</div>
    </div>
  );
}
