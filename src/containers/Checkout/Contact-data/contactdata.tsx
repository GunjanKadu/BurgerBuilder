import React, { Component } from 'react';
import Button from '../../../components/UI/Button/button';
import './contactData.css';
export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };
  render() {
    return (
      <div className='ContactData'>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input type='text' name='name' placeholder='Enter Your Name' />
          <input type='email' name='email' placeholder='Enter Your Email' />
          <input type='text' name='street' placeholder='Enter Your Street' />
          <input
            type='text'
            name='postal'
            placeholder='Enter Your Postal Code'
          />
          <Button btnType='Success'>ORDER</Button>
        </form>
      </div>
    );
  }
}
