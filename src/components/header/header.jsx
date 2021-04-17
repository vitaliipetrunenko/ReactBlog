import React from 'react';
import styl from './header.module.css';
import Header__buttonPlatform from './__buttonPlatform/header__buttonPlatform';

import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={styl.Header}>

        <NavLink  to="/news/"><img  className={styl.img}></img></NavLink>
                <Header__buttonPlatform txt="About"/>
                <Header__buttonPlatform txt="More info"/>
               
               


        </div>
    );
}

export default Header;