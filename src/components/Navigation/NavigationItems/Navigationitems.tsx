import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/navigationItem'

const navigationItems = (props: any) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem >CheckOut </NavigationItem>
    </ul>
)

export default navigationItems;