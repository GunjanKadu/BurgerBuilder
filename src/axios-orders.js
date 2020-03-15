import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-752ae.firebaseio.com/'
});

export default instance;
