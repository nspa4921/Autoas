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
    <div id="service"  className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>TJENESTER</h2>
          <br></br>
          <Image />
          <br></br>
        </GridItem>
      </GridContainer>   
        <GridContainer className="explanation">
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Klargøring"
              description="Kosmetisk klargøring af køretøjets indre og ydre "
              icon={DoneOutlineSharpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Lugtfjernelse "
              description="Fjernelse af tunge ubehagelige lugte fra køretøjet forårsaget af: noget brand, tobaksrøg, lugt af animalsk oprindelse ..."
              icon={LocalCarWashSharpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Lakbehandling"
              description="Fjernelse af alle typer skader på lakken - lak og monteringsdele på køretøjet (polering, maling, udskiftning)"
              icon={DoneOutlineSharpIcon}
              iconColor="primary"
              vertical
            />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Forsikringssager  "
              description="I ovenstående beskrivelse.."
              icon={DoneOutlineSharpIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
        <div>
      </div>
    </div>
  );
}



//** */ Option 2 //**

// import React from "react";
// import Card from "views/LandingPage/Card/index.js";
// import "assets/css/App.css";
// import { makeStyles } from "@material-ui/core/styles";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// import InfoArea from "components/InfoArea/InfoArea.js";
// import DoneOutlineSharpIcon from '@material-ui/icons/DoneOutlineSharp';
// // import { Container, Row, Col } from 'react-grid-system';


// const useStyles = makeStyles(styles);
// const useStyles1 = makeStyles({
//   root: {
// 	maxWidth: '100%',
//   },
//   media: {
// 	height: "420px",
//   },
// });

// function ServiceCard() {
//   const classes = useStyles();
//   const classesBase = useStyles1();
//   return (
    

//     <div id="service" style={{paddingTop: "110px"}} className={classes.section}>
//            <h2 className={classes.title}>TJENESTER</h2>
//            <br></br>
//     <div className="App" >
//       <Card 
//         imgUrl="http://www.ns-app.com/img/autoas_12.jpg"
//         title="Klargøring"
//         description="Kosmetisk klargøring af køretøjets indre og ydre"
//         icon={<InfoArea
                        
//                         icon={DoneOutlineSharpIcon}
//                         iconColor="primary"
//                         vertical
//                       />}
//             align="center"
//       />
      
//       <Card 
//         imgUrl="http://www.ns-app.com/img/autoas_18.jpg"
//         title="Lugtfjernelse"
//         description="Fjernelse af tunge ubehagelige lugte fra køretøjet forårsaget af: noget brand, tobaksrøg, lugt af animalsk oprindelse ..."
//         icon={<InfoArea
                        
//           icon={DoneOutlineSharpIcon}
//           iconColor="primary"
//           vertical
//         />}
//         align="center"
//         />
//       <Card 
//         imgUrl="http://www.ns-app.com/img/autoas_1.jpg"
//         title="Lakbehandling"
//         description="Fjernelse af alle typer skader på lakken - lak og monteringsdele på køretøjet (polering, maling, udskiftning)"
//         icon={<InfoArea
                        
//           icon={DoneOutlineSharpIcon}
//           iconColor="primary"
//           vertical
//         />}
//         align="center"
//         />
//       <Card 
//         imgUrl="http://www.ns-app.com/img/autoas_27.jpg"
//         title="Forsikringssager"
//         description="I ovenstående beskrivelse.."
//         icon={<InfoArea
                        
//           icon={DoneOutlineSharpIcon}
//           iconColor="primary"
//           vertical
//         />}
//         align="center"
//       />
//     </div>

//       </div>
//   );
// }

// export default ServiceCard;