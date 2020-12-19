import React, { Component } from 'react';
import image from 'assets/img/ClipartKey_242125.png';
import 'assets/css/ResponsiveImg.css';


  class Image extends Component {
    render(){
      return(
        <div>
        <img style={{width: '500px'}} className="picture" src={image} alt="Tjeneste"/>
        </div>
     );
    }
  }

export default Image;