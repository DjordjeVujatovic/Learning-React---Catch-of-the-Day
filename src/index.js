import React from 'react'; //imports everything in react library into variable called React.
import { render } from 'react-dom'; //importing render method from react-dom.
import './css/style.css'; //Importing compiled style.css file
import App from './components/App';
import StorePicker from './components/StorePicker';//imports StorePicker component from StorePicker.js
import Order from './components/Order';
import Inventory from './components/Inventory';





render(<App/>, document.querySelector('#main')); //What component would you like to render? What DOM element should it render out to? (#main)
