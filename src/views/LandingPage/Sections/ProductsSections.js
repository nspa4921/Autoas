import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax, Background } from "react-parallax";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// import waveImg from "assets/img/bg-autoas_edited_a.jpg";


const useStyles = makeStyles(styles);


const insideStyles = {
  background: "rgba(255,255,255,0.7)",
  padding: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  boxShadow:
    "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};

  

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.section} id="products" >
         <h2 className={classes.title}>PRODUKTER</h2>
        <br></br>  
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('http://www.ns-app.com/img/autoas_12_edited.jpg')"
          }}
        />
      </Background>
      <div style={{ height: 500 }} >
        <div style={insideStyles}><h5 className={classes.description} align="center" style={{ fontSize: 21, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5></div>
      </div>
    </Parallax>
   {/* <CardMedia
        className={classesBase.media}
        image={waveImg}
      /> */}
 
     
 </div>
  );
}
