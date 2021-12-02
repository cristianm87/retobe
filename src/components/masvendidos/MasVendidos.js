import React from 'react';
import './MasVendidos.css';
import BancoMatero from '../../img/masvendidos/masvendidos-banco-matero.png';
import Banqueta from '../../img/masvendidos/masvendidos-banqueta.png';
import BancoLargo from '../../img/masvendidos/masvendidos-banco-largo.png';
import BancoConRespaldo from '../../img/masvendidos/masvendidos-banqueta-con-respaldo.png';
import Ellipse from '../../img/ellipse.png';
const MasVendidos = () => {
  return (
    <section className="masvendidos">
      <div className="container-xxl">
        <div className="masvendidos-wrapper">
          <div className="masvendidos-titulo-box">
            <img src={Ellipse} alt="miscellaneous ellipse" />
            <p className="masvendidos-titulo">Más vendidos</p>
            <img src={Ellipse} alt="miscellaneous ellipse" />
          </div>

          <div class="row masvendidos-row">
            <div class="col-12 col-lg-6 col-xl-3 d-flex justify-content-center">
              <div className="masvendidos-item-wrapper">
                <div className="masvendidos-item-bg">
                  <img src={BancoMatero} alt="banco matero" />
                </div>
                <div className="masvendidos-item-text-wrapper">
                  <p className="masvendidos-item-title">Banco matero</p>
                  <p className="masvendidos-item-description">
                    Descripción corta del producto
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 d-flex justify-content-center">
              <div className="masvendidos-item-wrapper">
                <div className="masvendidos-item-bg">
                  <img src={Banqueta} alt="banqueta" />
                </div>
                <div className="masvendidos-item-text-wrapper">
                  <p className="masvendidos-item-title">Banqueta</p>
                  <p className="masvendidos-item-description">
                    Descripción corta del producto
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 d-flex justify-content-center">
              <div className="masvendidos-item-wrapper">
                <div className="masvendidos-item-bg">
                  <img src={BancoLargo} alt="banco largo" />
                </div>
                <div className="masvendidos-item-text-wrapper">
                  <p className="masvendidos-item-title">Banco largo</p>
                  <p className="masvendidos-item-description">
                    Descripción corta del producto
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-3 d-flex justify-content-center">
              <div className="masvendidos-item-wrapper">
                <div className="masvendidos-item-bg">
                  <img src={BancoConRespaldo} alt="banco con respaldo" />
                </div>
                <div className="masvendidos-item-text-wrapper">
                  <p className="masvendidos-item-title">
                    Banqueta con respaldo
                  </p>
                  <p className="masvendidos-item-description">
                    Descripción corta del producto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasVendidos;
