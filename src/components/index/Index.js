import React from 'react';
import Servicios from '../servicios/Servicios.js';
import ConoceMas from '../conocemas/ConoceMas.js';
import MasVendidos from '../masvendidos/MasVendidos.js';
const index = () => {
  return (
    <>
      <Servicios />
      <ConoceMas />
      <MasVendidos />
    </>
  );
};

export default index;
