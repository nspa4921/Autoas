import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// 
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="about" style={{paddingTop: '120px'}}> 
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title} >Om os</h2>

          <h5 className={classes.description} align="center" style={{ fontSize: 18}}>Det uafhængige selskab blev grundlagt i 2019. Det kom som resultatet af mange års erfaring i bilbranchen, 
          først som en hobby, og derefter som professionelt arbejde.  
          <br></br>
          Upåklagelig kvalitet kan ses gennem det vellykkede samarbejde med biludstillings saloner hos AUDI, WV, TOYOTA, samt med et betydeligt antal privatpersoner. De er blev erhvervet, til min store tilfredshed, takket være anbefalingerne fra tilfredse kunder. 
          </h5> 
        </GridItem>
      </GridContainer>  
    </div>
  );
}
