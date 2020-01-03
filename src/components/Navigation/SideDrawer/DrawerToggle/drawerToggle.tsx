import React from 'react';
import './drawerToggle.css'
const drawerToggle = (props: any) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;