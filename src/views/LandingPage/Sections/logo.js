import React, { Component } from 'react';
import image from 'assets/img/logo.png';
import 'assets/css/ResponsiveImg.css';


  class Logo extends Component {
    render(){
      return(
        <div>
        <img style={{width: '200px'}} className="picture" src={image} alt="Tjeneste"/>
        </div>
     );
    }
  }

export default Logo;