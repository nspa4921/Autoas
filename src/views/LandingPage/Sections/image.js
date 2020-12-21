import React, { Component } from 'react';
import image from 'assets/img/ClipartKey_242125.png';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';


  class Image extends Component {
    render(){
      return(
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
        <img className="picture" src={image} alt="Tjeneste"/>
        </GridItem>
        </GridContainer>
     );
    }
  }

export default Image;