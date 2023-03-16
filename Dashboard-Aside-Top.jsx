import React, {useState} from "react";
import lightModeLogo from './logo-light.png';
import darkModeLogo from './logo-dark.png';
export const AsideTop = ({setCls, theme}) => {
    const myIcon = 'material-icons-sharp';
    return(
        <div className='top'>
                    <div className='logo'>
                        <img src={theme === 'lightmode' ? lightModeLogo : darkModeLogo } />
                    </div>
                    <div className='close' onClick={() => setCls('closed')} >
                        <span className={myIcon}>close</span>
                    </div>
                </div>
    )
}