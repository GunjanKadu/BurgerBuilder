import React from 'react';
import './buildControl.css'

const buildControl = (props: any): JSX.Element => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More" onClick={props.added}>More</button>
        </div>
    )
}
export default buildControl;