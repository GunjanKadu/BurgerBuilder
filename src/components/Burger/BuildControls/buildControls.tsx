import React from 'react';
import './buildControls.css';
import BuildControl from './BuildControl/buildControl';

const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }

]
const buildControls = (props: any): JSX.Element => {
    return (
        <div className="BuildControls">
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {control.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.type}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        price={props.price} />
                )
            })}
            {props.purchaseable ? <button className="OrderButton">ORDER NOW</button> : <button className="OrderButton" disabled={true}>ORDER NOW</button>}
        </div >
    )

}

export default buildControls;