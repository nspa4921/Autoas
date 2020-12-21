import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
		 <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} >Produkter</h2>
		  
		  <Card className={classesBase.root} >
      <CardMedia
        className={classesBase.media}
        image={waveImg}
		title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="textSecondary">
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
        </Typography>
      </CardContent>
    </Card>
	</GridItem>
		  </GridContainer>
	</div>
  );
}
