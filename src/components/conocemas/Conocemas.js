import React from 'react';
import './ConoceMas.css';

const ConoceMas = () => {
  return (
    <section className="conocemas">
      <div className="container-xxl">
        <div className="row conocemas-bg">
          <div className="col-lg-8 conocemas-col-img"></div>
          <div className="col-lg-4 conocemas-col-info">
            <div className="conocemas-info-wrapper">
              <div className="conocemas-text-box">
                <p>
                  Crea <b>muebles a tu </b> <br />
                  <b>medida</b> o solicitalos <br /> al por mayor
                </p>
              </div>
              <div className="conocemas-button-wrapper">
                <button
                  type="button"
                  className="btn shadow-none conocemas-button"
                >
                  Conoce más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConoceMas;
