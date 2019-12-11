import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import burgerState from '../../assets/interface/burgetState';
import BuildControl from '../../components/Burger/BuildControls/buildControls';

interface Ingredient_Prices {
    [propName: string]: number,
}
const INGREDIENT_PRICES: Ingredient_Prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
export class burgerbuilder extends Component<{}, burgerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        };
    }
    addIngredientHandler = (type: string) => {

        const oldCount: number = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddtion = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }
    removeIngredientHandler = () => {

    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControl
                    ingredientAdded={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default burgerbuilder;


