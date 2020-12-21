import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import waveImg from "assets/img/bg-autoas_edited_a.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);
const useStyles1 = makeStyles({
  root: {
	maxWidth: '100%',
  },
  media: {
	height: "420px",
  }
});

export default function ImgMediaCard() {
  const classesBase = useStyles1();
  const classes = useStyles();

  return (
	<div className={classes.section} id="products" style={{paddingTop: '120px'}}>
		 <GridContainer justify="center">
        <GridItem >
          <h2 className={classes.title}>Produkter</h2>
		  
		  
      <CardMedia
        className={classesBase.media}
        image={waveImg}
      />
      <CardContent>
      <h5 className={classes.description} align="center" style={{ fontSize: 18}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
        </h5>
      </CardContent>
    
	</GridItem>
		  </GridContainer>
	</div>
  );
}
