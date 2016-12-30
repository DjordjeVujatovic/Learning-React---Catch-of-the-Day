import React from 'react';

//Header is a static component that only renders out HTML, therefore can be a stateless functional component.
const Header = (props) => {

      return(
        <header className="top">
          <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
           Day
          </h1>
          <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
      )
}   

header.propTypes = {
  tagline: React.PropTypes.string.isRequired
}
export default Header;