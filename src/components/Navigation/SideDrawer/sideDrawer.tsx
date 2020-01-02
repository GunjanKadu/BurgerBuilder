import React from 'react';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import './sideDrawer.css'

const sideDrawer = (props: any) => {
    return (
        <div className="SideDrawer">
            <div className="Logo1">
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}


export default sideDrawer;