import React, { Component } from 'react';
import image from 'assets/img/ClipartKey_242125.png';




  class Image extends Component {
    render(){
      return(
        <div>
        <img align="center" className="picture" src={image} alt="Tjeneste"/>
        </div>
        
     );
    }
  }

export default Image;