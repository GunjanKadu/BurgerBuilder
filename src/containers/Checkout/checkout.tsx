import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/checkoutSummary';
import { RouteComponentProps } from 'react-router-dom';
export class checkout extends Component<RouteComponentProps> {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default checkout;
