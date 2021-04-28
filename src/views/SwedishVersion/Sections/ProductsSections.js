import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image5 from "assets/img/IMG-20200323-WA0007[1035]_edited.jpg";
import image2 from "assets/img/bg-2.jpg";
import image3 from "assets/img/bg-3.jpg";
import image4 from "assets/img/bg-4a.jpg";
import image1 from "assets/img/product1.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import styles1 from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);

// const insideStyles = {
//   background: "rgba(255,255,255,0.7)",
//   padding: 30,
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)",
//   boxShadow:
//     "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
//   fontSize: 20, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"         
// };

export default function ProductsSection() {
  const classes = useStyles();
  const classesBase = useStyles1();
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div id="products"  className={classesBase.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12}>
          <h2 className={classesBase.title}>PRODUKTER</h2>
          <div className={classesBase.description}>
      <h5 className="explanation"  align="center" style={{ fontSize: 18, color: "rgba(0,0,0,0.9)"}}>
      Produkterna som används vid det exteriöra samt interiöra arbetet utgörs av världskända märken med långa traditioner och 
hög kvalitet inom den världsomfattande bilindustrin
              </h5>
            </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} className="slick-image" alt=""/>
                  {/* <div className="slick-caption">
                  <h5 className={classes.description} align="center" style={insideStyles}>
                De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5>
                  </div> */}
                </div>
                <div>
                  <img src={image2} className="slick-image" alt=""/>
                </div>
                <div>
                  <img src={image3} className="slick-image" alt=""/>
                </div>
                <div>
                  <img src={image4} className="slick-image" alt=""/>
                </div>
                <div>
                  <img src={image5} className="slick-image" alt=""/>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
    </GridItem>
    </GridContainer>
    </div>
  );
}
