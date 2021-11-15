import React from 'react';
import './NavBar.css';
import logo from '../../img/logo.jpg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-xxl">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" class="navbar-brand nav-link">
          <img src={logo} alt="" width="120"></img>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active navbar-link"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/nosotros"
                className="nav-link active navbar-link"
                aria-current="page"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/catalogo"
                className="nav-link active navbar-link"
                aria-current="page"
              >
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/a-tu-medida"
                className="nav-link active navbar-link"
                aria-current="page"
              >
                A tu medida
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-link active navbar-link"
                aria-current="page"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
