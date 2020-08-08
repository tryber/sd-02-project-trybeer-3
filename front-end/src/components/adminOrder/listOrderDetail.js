import React from 'react';

export default function ListOrderDetailed(order) {
  const { orderId, deliver, total, products } = order.order;
  console.log(products);
  return (
    <div>
      <div className="title-orders">
        {`Pedido ${orderId} - ${deliver ? 'Entregue' : 'Pendente'}`}
      </div>
      <div className="container-big-border">
        {products.map((product) => (
          <div className="container-detail-admin" key={product.name}>
            <div>{`${product.qty} - ${product.name}`}</div>
            <div>{(product.total).toFixed(2)}</div>
          </div>
        ))}
        <div>{`Total: ${total.toFixed(2)}`}</div>
      </div>
    </div>
  );
}
