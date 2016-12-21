import React from 'react';

class StorePicker extends React.Component { 
    render(){
      return(
          //Inside JSX you can only ever return one parent element.
        <form className="store-selector">
           {/*This is how you write a comment inside JSX. Never put comments above parent element.*/}
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit Store</button>
        </form>
      )
    }    
} 

export default StorePicker;