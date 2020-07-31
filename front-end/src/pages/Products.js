import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import AllProducts from '../components/Products/AllProducts';
import ShowCart from '../components/Products/ShowCart';

const Products = () => (
  <div>
    <Header />
    <Sidebar />
    <AllProducts />
    <ShowCart />
  </div>
);

export default Products;
