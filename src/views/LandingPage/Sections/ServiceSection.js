import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import DoneOutlineSharpIcon from '@material-ui/icons/DoneOutlineSharp';
import LocalCarWashSharpIcon from '@material-ui/icons/LocalCarWashSharp';
// import CarService from "assets/img/ClipartKey_242125.png";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Image from "views/LandingPage/Sections/image";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);



export default function ServiceSection() {
  const classes = useStyles();
  return (
    <div id="service" style={{paddingTop: "110px"}} className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Tjenester</h2>
          <br></br>
          <Image />
          <br></br>
        </GridItem>
      </GridContainer>   
        <GridContainer>
          <GridItem xs={6} sm={12} md={4}>
            <InfoArea
              title="Klargøring"
              description="Kosmetisk klargøring af køretøjets indre og ydre "
              icon={DoneOutlineSharpIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={12} md={4}>
            <InfoArea
              title="Lugtfjernelse "
              description="Fjernelse af tunge ubehagelige lugte fra køretøjet forårsaget af: noget brand, tobaksrøg, lugt af animalsk oprindelse ..."
              icon={LocalCarWashSharpIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={6} sm={12} md={4}>
            <InfoArea
              title="Lakbehandling"
              description="Fjernelse af alle typer skader på lakken - lak og monteringsdele på køretøjet (polering, maling, udskiftning)"
              icon={DoneOutlineSharpIcon}
              iconColor="info"
              vertical
            />
            </GridItem>
            <GridItem xs={6} sm={12} md={4}>
            <InfoArea
              title="Forsikringssager  "
              description="I ovenstående beskrivelse.."
              icon={DoneOutlineSharpIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
        <div>
      </div>
    </div>
  );
}
