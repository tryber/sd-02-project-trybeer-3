import React, { useEffect, useContext } from 'react';
import { getOrders } from '../services';
import * as ls from '../components/Utils/localStorage';
import Trybeer from '../context';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const MyOrders = () => {
  const { setPage } = useContext(Trybeer);
  setPage('Meus Pedidos');

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = ls.getItem('user', {}).token;
      const request = await getOrders(orders).then((data) => data);
      console.log(request);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default MyOrders;
