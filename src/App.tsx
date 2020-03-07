import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/burgerbuilder';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
        <p>Hello</p>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
