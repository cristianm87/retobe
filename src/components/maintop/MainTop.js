
import React from 'react';

import './MainTop.css'

import FirstImg from '../../img/20210811_162252.jpg'
import SecondImg from '../../img/IMG-20200904-WA0036.jpg'
import ThirdImg from '../../img/20210811_161911.jpg'

const MainTop = () => {

    return (
        <div className="container mainTop-container-img">
            <div className="row">
                    <img className="col-12 maintTop-img" src={ FirstImg } alt="20210811_162252.jpg" />
                    <img className="col-6 mt-3 maintTop-img" src={ SecondImg } alt="IMG-20200904-WA0036.jpg"/>
                    <img className="col-6 mt-3 maintTop-img" src={ ThirdImg } alt="20210811_161911.jpg"/>
            </div>
        </div>
    )
    };

export default MainTop;