import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import burgerState from '../../assets/interface/burgetState';
import BuildControl from '../../components/Burger/BuildControls/buildControls';

export class burgerbuilder extends Component<{}, burgerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            ingredients: {
                salad: 2,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        };
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControl />
            </Aux>
        );
    }
}

export default burgerbuilder;
