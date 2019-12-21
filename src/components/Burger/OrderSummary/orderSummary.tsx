import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/button'
interface orderSummaryProps {

}
const orderSummary = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>
                {igKey}:{props.ingredients[igKey]}
            </span></li>
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button clicked={props.purchaseCancelled} buttonType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} buttonType="Success">CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;