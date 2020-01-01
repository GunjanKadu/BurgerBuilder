import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png'
import './logo.css'

const logo = (props: any) => (
    <div className="Logo">
        <img src={burgerLogo} alt="Burgericious" />
    </div>
)

export default logo