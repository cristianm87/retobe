import React from 'react'

//Import Personal Style
import './FirstMain.css'

//Import Imagen
import HomeImg from '../../img/IMG_20210303_174529532_HDR.jpg'

const FirstMain = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex img-FirstMain-container">
                <img src={ HomeImg }/>
            </div>           
        </div>
    )
}

export default FirstMain