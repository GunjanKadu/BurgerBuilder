import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/checkoutSummary';
import { RouteComponentProps, Route } from 'react-router-dom';
import ContactData from './Contact-data/contactdata';

export class checkout extends Component<RouteComponentProps> {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };
  componentDidMount() {
    const query: any = new URLSearchParams(this.props.location.search);
    console.log(query);
    const ingredients: any = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }
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
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );
  }
}

export default checkout;
