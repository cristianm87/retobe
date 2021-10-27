import React from 'react'

//React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Component
import NavBar from '../components/navbar/NavBar.js'
import Index from '../components/index/Index.js';

const RouterApp = () => {
    return (
        <Router>
            <div>
                {/* Barra de Navegación */}
                <NavBar />
                <Switch>
                    {/* Pantalla Inicial */}
                    <Route path="/" component={ Index }></Route>
                </Switch>
            </div>
        </Router>
    )
}

export default RouterApp
