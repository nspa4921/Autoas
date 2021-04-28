import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import SimpleReactLightbox from 'simple-react-lightbox';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

// core components
import Header from "../SwedishVersion/Sections/Header/Header";
import Footer from "../SwedishVersion/Sections/Footer/Footer";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "../SwedishVersion/Sections/Header/HeaderLinks";
import TypewriterEffect from "components/Typewriter/TypewriterEffect.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Sections for this page
import AboutSection from "./Sections/AboutSection";
import ServiceSection from "./Sections/ServiceSection";
import ProductsSection from "./Sections/ProductsSections";
import ContactSection from "./Sections/ContactSection";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  var bgColors = { "Default": 'rgba(0, 0, 0, 0.37)', };
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  const slider = (
    <AutoplaySlider 
    organicArrows={false}
    buttonContentRight={<p></p>}
    buttonContentLeft={<p></p>}
    play
    cancelOnInteraction={false}
    interval={4000}
    >
      <div filter data-src={require('assets/img/autoas_12_edited.jpg')} >  
      <GridContainer >
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}}>
            <ThemeProvider theme={theme}>
             <Typography variant="h2" style={{ textShadow: '3px 3px rgba(0, 0, 0, 0.64)', fontFamily:'"Segoe UI Symbol"'}}> <TypewriterEffect title="BILVÅRD" /> </Typography>
             </ThemeProvider>
            </GridItem>
          </GridContainer>
      </div>
      <div data-src={require('assets/img/autoas_7_edited_c.jpg')} >  
      <GridContainer >
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}}>
            <ThemeProvider theme={theme}>
             <Typography variant="h2" style={{textShadow: '3px 3px rgba(0, 0, 0, 0.64)', fontFamily:'"Segoe UI Symbol"'}}> <TypewriterEffect title="REPARERA" /> </Typography>
             </ThemeProvider>
            </GridItem>
          </GridContainer>
      </div>
      <div data-src={require('assets/img/autoas_5_edited.jpg')} >  
      <GridContainer>
            <GridItem align="center" className={classes.container} style={{backgroundColor: bgColors.Default}}>
            <ThemeProvider theme={theme}>
             <Typography variant="h2" style={{textShadow: '3px 3px rgba(0, 0, 0, 0.64)', fontFamily:'"Segoe UI Symbol"'}}> <TypewriterEffect title="FÖNSTER" /> </Typography>
             </ThemeProvider>
            </GridItem>
          </GridContainer>
      </div>
    </AutoplaySlider>
  );


  return (
    <div>
      {slider}
      <Header 
        color="transparent"
        routes={dashboardRoutes}
        brand="AUTO AS"
        onclick="location.href='http://www.autoas.com';"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
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
        <ProductsSection />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
