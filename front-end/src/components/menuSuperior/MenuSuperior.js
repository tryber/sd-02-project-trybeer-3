import React, { useContext } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Trybeer from '../../context';
import '../../styles/MenuSuperior.css';

const MenuSuperior = () => {
  const { open, setOpen } = useContext(Trybeer);
  const handleClick = () => setOpen(!open);
  return (
    <div className="Menu_Sup_All">
      <div className="Menu_Sup">
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleClick}
          color='white'
        />
        <h2>TryBeer</h2>
      </div>
    </div>
  );
};

export default MenuSuperior;
