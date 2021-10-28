import React from 'react'

//Importar Styles
import './NavBar.css';


const NavBar = () => {
    return (
        <header>
            <nav className="containerNavbar">
                <div className="navbar">
                    <p className="firsP">Inicio</p>
                    <p className="SecondP">Nosotros</p>
                    <p className="thirtP">Catalogo</p>
                    <p className="fourP">A tu Medida</p>
                    <p className="fiveP">Contacto</p>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
