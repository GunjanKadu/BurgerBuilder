import React from 'react';
import './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/Navigationitems'
import DrawerToggle from '../SideDrawer/DrawerToggle/drawerToggle'

const toolBar = (props: any) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="Logo2">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);
export default toolBar;