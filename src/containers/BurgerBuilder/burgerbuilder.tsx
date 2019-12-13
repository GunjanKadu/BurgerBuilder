import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import burgerState from '../../assets/interface/burgetState';
import BuildControls from '../../components/Burger/BuildControls/buildControls';

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
            totalPrice: 4,
            purchaseable: false
        };
    }

    addIngredientHandler = (type: string) => {

        const oldCount: number = this.state.ingredients[type];
        const updatedCount: number = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddtion = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type: string) => {
        const oldCount: number = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        const updatedCount: number = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddtion = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddtion;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients)
    }

    updatePurchaseState(updatedIngredients: Ingredient_Prices) {
        const sum = Object.keys(updatedIngredients)
            .map((key) => {
                return updatedIngredients[key];
            })
            .reduce((acc, next) => {
                console.log(acc + next);
                return acc + next;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable} />

            </Aux>
        );
    }
}

export default burgerbuilder;


