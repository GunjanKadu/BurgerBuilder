import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import burgerState from "../../assets/interface/burgetState";
import BuildControls from "../../components/Burger/BuildControls/buildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSumamry from "../../components/Burger/OrderSummary/orderSummary";
import axios from "../../axios-orders";

interface Ingredient_Prices {
  [propName: string]: number;
}
const INGREDIENT_PRICES: Ingredient_Prices = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
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
      purchaseable: false,
      purchasing: false
    };
  }

  addIngredientHandler = (type: string) => {
    const oldCount: number = this.state.ingredients[type];
    const updatedCount: number = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddtion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: string) => {
    const oldCount: number = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount: number = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddtion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddtion;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState(updatedIngredients: Ingredient_Prices) {
    const sum = Object.keys(updatedIngredients)
      .map(key => {
        return updatedIngredients[key];
      })
      .reduce((acc, next) => {
        return acc + next;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Gunjan Kadu",
        address: {
          street: "At TestStarßee",
          city: "Heidelberg",
          zip: "69207",
          country: "Germany"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        console.log(response);
        alert("Please Be Patient Your Order Has Been Submitted");
      })
      .catch(error => {
        alert("Your Order Was Not Successfull Please Try Again");
      });
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSumamry
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default burgerbuilder;
