import React from 'react';
import './button.css';

const button = (props: any) => (
  <button
    className={props.buttonType === 'Danger' ? 'Danger' : 'Success'}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
