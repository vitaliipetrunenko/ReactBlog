import React from 'react';
import './sidebar.css';
import Sidebar__buttonPlatform from './__buttonPlatform/sidebarr__buttonPlatform.jsx'


function Sidebar() {
    return (
        <div className='Sidebar'>
        
            <Sidebar__buttonPlatform txt="News" link="/news"/>
            <Sidebar__buttonPlatform txt="About" link="/about"/>

        </div>
    );
}

export default Sidebar;