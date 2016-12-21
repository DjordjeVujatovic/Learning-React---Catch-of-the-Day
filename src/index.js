import React from 'react'; //imports everything in react library into variable called React.
import { render } from 'react-dom'; //importing render method from react-dom.
import StorePicker from './components/StorePicker'//imports StorePicker component from StorePicker.js




render(<StorePicker/>, document.querySelector('#main')); //What component would you like to render? What DOM element should it render out to? (#main)