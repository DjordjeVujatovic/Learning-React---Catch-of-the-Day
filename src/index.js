import React from 'react'; //imports everything in react library into variable called React.
import { render } from 'react-dom'; //importing render method from react-dom.
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css'; //Importing compiled style.css file
import App from './components/App';
import StorePicker from './components/StorePicker';//imports StorePicker component from StorePicker.js
import NotFound from './components/NotFound';


const Root = () => {
    return (
        <BrowserRouter>
         <div> {/*Match/Miss cannot be direct children of BroswerRouter*/}
           <Match exactly pattern="/" component={StorePicker} />
           <Match pattern="/store/:storeId" component={App} />
           <Miss component={NotFound} />
         </div>

        </BrowserRouter>
    )
}



render(<Root/>, document.querySelector('#main')); //What component would you like to render? What DOM element should it render out to? (#main)
