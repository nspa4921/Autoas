import React, { Component } from 'react';
import image from 'assets/img/ClipartKey_242125.png';
import GridItem from 'components/Grid/GridItem';


  class Image extends Component {
    render(){
      return(
        
          <GridItem>
        <img style={{width: '780px', maxWidth: '100%'}} align="center" className="picture" src={image} alt="Tjeneste"/>
        </GridItem>
        
     );
    }
  }

export default Image;