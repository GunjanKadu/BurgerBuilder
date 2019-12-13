import React from 'react';
import './buildControl.css'

const buildControl = (props: any): JSX.Element => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            {props.price > 4 ? <button className="Less" onClick={props.removed}>Less</button> : <button className="Less" onClick={props.removed} disabled={true}>Less</button>}
            <button className="More" onClick={props.added}>More</button>
        </div>
    )
}
export default buildControl;