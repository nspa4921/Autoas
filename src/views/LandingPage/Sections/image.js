import React, { Component } from 'react';
import image from 'assets/img/car-wash-auto-detailing-automobile-repair-shop-vehicle-car-f8c6ed84a3c6c5cbc3bb42cfae2e2666.png';
import GridItem from 'components/Grid/GridItem';


  class Image extends Component {
    render(){
      return(
        
          <GridItem>
        <img style={{width: '450px', maxWidth: '100%'}} align="center" className="picture" src={image} alt="Tjeneste"/>
        </GridItem>
        
     );
    }
  }

export default Image;