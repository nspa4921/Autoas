import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SimpleReactLightbox from 'simple-react-lightbox';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {Link} from 'react-scroll';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import AboutSection from "./Sections/AboutSection.js";
import ServiceSection from "./Sections/ServiceSection.js";
import ProductsSection from "./Sections/ProductsSections.js";
import ContactSection from "./Sections/ContactSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  var bgColors = { "Default": 'rgba(242, 251, 251, 0.21)'};

  const slider = (
    <AutoplaySlider 
    organicArrows={false}
    buttonContentRight={<p></p>}
    buttonContentLeft={<p></p>}
    play
    cancelOnInteraction={false}
    interval={4000}
    >
      <div id="top" filter data-src={require('assets/img/autoas_12_edited.jpg')} >  
      <GridContainer>
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}}>
            <h1 style={{fontSize: "72px", fontWeight: 973, color: "rgba(130, 149, 247, 0.68)"}}> BILPLEJE </h1>
            </GridItem>
          </GridContainer>
      </div>
      <div data-src={require('assets/img/autoas_7_edited_c.jpg')} >  
      <GridContainer >
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}}>
            <h1 style={{fontSize: "72px", fontWeight: 973, color: "rgba(130, 149, 247, 0.68)"}}> REPARATION </h1>
            </GridItem>
          </GridContainer>
      </div>
      <div data-src={require('assets/img/autoas_5_edited.jpg')} >  
      <GridContainer>
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}} >
            <h1 style={{fontSize: "72px", fontWeight: 973, color: "rgba(130, 149, 247, 0.68)"}}> BILRUDER </h1>
            </GridItem>
          </GridContainer>
      </div>
    </AutoplaySlider>
  );


  return (
    <div>
      {slider}
      <Link to="top" spy={true} smooth={true} className={classes.list}>
      <Header 
        color="transparent"
        routes={dashboardRoutes}
        brand="AUTO AS"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      </Link>
      {/* <Parallax filter image={require("assets/img/autoas_5.jpg")} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} align="center" >
              <h1 className={classes.title}> BILPLEJE - REPARATION - BILRUDER</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AboutSection />                 
          <ServiceSection />
          <SimpleReactLightbox>
        <ProductsSection />
        </SimpleReactLightbox>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
