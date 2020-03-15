import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/burgerbuilder';
import Checkout from './containers/Checkout/checkout';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
