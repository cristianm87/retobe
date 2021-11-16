import React from 'react';
import './Servicios.css';
import Natural from '../../img/natural.png';
import Amano from '../../img/a-mano.png';
import Medida from '../../img/medida.png';
import Delivery from '../../img/delivery.png';

const Servicios = () => {
  return (
    <section className="servicios">
      <div className="container-xxl">
        <div className="row servicios-row">
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <div className="servicios-wrappe d-flex flex-column justify-content-center align-items-center">
              <div className="servicios-img-box ">
                <img src={Natural} alt="materiales naturales" />
              </div>
              <div className="servicios-text-box">
                <p className="servicios-text-title">Materiales 100% natural</p>
                <p className="servicios-text-subtitle">
                  Usamos madera y <br /> cuero argentinos
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <div className="servicios-wrapper d-flex flex-column justify-content-center align-items-center">
              <div className="servicios-img-box">
                <img src={Amano} alt="trabajos a mano" />
              </div>
              <div className="servicios-text-box">
                <p className="servicios-text-title">Somos fabricantes</p>
                <p className="servicios-text-subtitle">
                  Somos parte de todo el <br /> proceso de fabricación
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <div className="servicios-wrapper d-flex flex-column justify-content-center align-items-center">
              <div className="servicios-img-box">
                <img src={Medida} alt="elegi las medidas" />
              </div>
              <div className="servicios-text-box">
                <p className="servicios-text-title">Productos a medida</p>
                <p className="servicios-text-subtitle">
                  Personaliza nuestros <br /> muebles a tu medida
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-center">
            <div className="servicios-wrapper d-flex flex-column justify-content-center align-items-center">
              <div className="servicios-img-box">
                <img src={Delivery} alt="hacemos envios" />
              </div>
              <div className="servicios-text-box">
                <p className="servicios-text-title">Envíos a todo el país</p>
                <p className="servicios-text-subtitle">
                  Llegamos a cualquier <br /> parte de Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
