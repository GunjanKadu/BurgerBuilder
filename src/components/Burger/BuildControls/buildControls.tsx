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
            {control.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.type}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)} />
                )
            })}
        </div >
    )

}

export default buildControls;