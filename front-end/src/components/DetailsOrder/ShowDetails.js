import React, { useContext } from 'react';
import Trybeer from '../../context';

const ShowDetails = () => {
  const { orderDetail } = useContext(Trybeer);
  console.log(orderDetail);
  return (
    <div>
      <p>Deu</p>
    </div>
  );
};

export default ShowDetails;
