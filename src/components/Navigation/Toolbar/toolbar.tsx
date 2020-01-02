import React from 'react';
import './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/Navigationitems'

const toolBar = (props: any) => (
    <header className="Toolbar">
        <div>MENU</div>
        <div className="Logo2">
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);
export default toolBar;