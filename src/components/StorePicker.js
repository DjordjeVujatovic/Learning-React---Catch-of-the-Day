import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component { 
    goToStore(event){
      event.preventDefault();
      //First grab the text from the box,
      //Second we're going to transition from / to /store/:storeId
      console.log(this.storeInput.value);

    }
    render(){
      //Render methods are naturally bound to parent component. All other methods are not.
      return(
          //Inside JSX you can only ever return one parent element.
        <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
           {/*This is how you write a comment inside JSX. Never put comments above parent element.*/}
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput=input}}/>
            <button type="submit">Visit Store</button>
        </form>
      )
    }    
} 

export default StorePicker;