import React, { useEffect, useContext } from 'react';
import { getOrders } from '../services';
import Trybeer from '../context';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

export default function MeusPedidosCliente() {
  const { setPage } = useContext(Trybeer);
  setPage('Meus Pedidos');

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('Token do usuário logado');
      const orders = await getOrders(token);
      console.log(orders);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
}
