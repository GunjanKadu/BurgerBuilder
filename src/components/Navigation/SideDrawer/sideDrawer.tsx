import React from 'react';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/Navigationitems';
import './sideDrawer.css'
import BackDrop from '../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props: any) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo1">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}


export default sideDrawer;