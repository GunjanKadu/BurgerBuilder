import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/button';

import './checkoutSummary.css';

const checkoutSummary = (props: any) => {
  return (
    <div className='CheckoutSummary'>
      <h1>We hope ot tastes</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' clicked>
        CANCEL
      </Button>
      <Button btnType='Success' clicked>
        CONTINUUE
      </Button>
    </div>
  );
};
export default checkoutSummary;
