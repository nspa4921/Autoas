import React, { Component } from 'react';
import imagep from 'assets/img/bg-autoas_edited_a.jpg';
import GridItem from 'components/Grid/GridItem';


  class ImageProducts extends Component {
    render(){
      return(
        
          <GridItem>
        <img style={{width: '450px', maxWidth: '100%'}} align="center" className="picture" src={imagep} alt="Tjeneste"/>
        </GridItem>
        
     );
    }
  }

export default ImageProducts;