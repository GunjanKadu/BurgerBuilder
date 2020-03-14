import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/burgerbuilder';
import Checkout from './containers/Checkout/checkout';
const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};

export default App;
