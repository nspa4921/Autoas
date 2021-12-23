import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();

  return ( 
    <div className="App" id="about" style={{paddingTop: '100px',  paddingBottom: '150px'}}> 
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} align="center">OM OSS</h2>
          <div className={classes.description}>
          <h5 className="explanation"  align="center" style={{ fontSize: 18, color: "rgba(0,0,0,0.9)"}}>Den enskilda firman startades 2019 och är ett resultat av en mångårig verksamhet med bilar. Det började som en hobby men som sedan växte till en proffessionell verksamhet.  
          <br></br><br></br>
          Den odisputabla kvaliteten framgår ur det framgångsrika samarbetet med flertalet etablerade bilsalonger som <strong>AUDI, WV, TOYOTA</strong> liksom med flertalet privata företag, som alla till min stora tillfredställelse, tillkommit tack vare tidigare nöjda kunders rekommendationer. 
          </h5>
          </div> 
        </GridItem>
      </GridContainer>  
    </div>
  );
}
