import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getOrders } from '../../services';
import * as ls from '../Utils/localStorage';
import Trybeer from '../../context';
import '../../styles/ShowOrders.css';

const ShowOrders = () => {
  const { pastOrders, setPastOrders } = useContext(Trybeer);
  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = ls.getItem('user', {});
      const { data: { orders } } = await getOrders(token).then((data) => data);
      setPastOrders(orders);
    };
    fetchOrders();
  }, []);

  return pastOrders && (
    <div className="PastOrders_all">
      {pastOrders.map(({
        day,
        month,
        orderId,
        total,
      }) => (
        <div
          className="PastOrders_order"
          key={`${orderId} buy info`}
        >
          <p>{`Pedido ${orderId}`}</p>
          <p>{`${day}/${month}`}</p>
          <p>{`Total: R$ ${total}`}</p>
          <button
            type="button"
            onClick={() => history.push(`/orders/${orderId}`)}
          >
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowOrders;
