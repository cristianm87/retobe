import React from 'react'

// Index Components
import FirstMain from '../firstmain/FirstMain.js'
import MainTop from '../maintop/MainTop.js'
import MainCenterTop from '../maincentertop/MainCenterTop.js'

const index = () => {
    return (
        <div>
            <FirstMain/>
            <main>
                <MainTop/>
                <MainCenterTop/>
            </main>
        </div>
    )
}

export default index
