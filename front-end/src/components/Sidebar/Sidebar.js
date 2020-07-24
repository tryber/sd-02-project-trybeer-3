import React, { useContext } from 'react';
import ButtonProducts from './Products';
import ButtonProfile from './Profile';
import ButtonOrders from './Orders';
import Trybeer from '../../context';
import ButtonExit from './Exit';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  const { open } = useContext(Trybeer);

  return (
    <div
      className="Sidebar_All"
      hidden={!open}
    >
      <div className="Sidebar_User">
        <p>Trybeer</p>
        <ButtonProducts />
        <ButtonOrders />
        <ButtonProfile />
      </div>
      <ButtonExit />
    </div>
  );
};

export default Sidebar;
