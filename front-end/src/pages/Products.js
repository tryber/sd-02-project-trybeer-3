import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import AllProducts from '../components/Products/AllProducts';
import ShowCart from '../components/Products/ShowCart';
import Trybeer from '../context';

const Products = () => {
  const { setPage } = useContext(Trybeer);

  useEffect(() => {
    setPage('Produtos');
  }, [setPage])

  return (
    <div>
      <Header />
      <Sidebar />
      <AllProducts />
      <ShowCart />
    </div>
  );
};

export default Products;
