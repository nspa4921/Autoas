import React from "react";
import { Parallax } from "react-parallax";
import { makeStyles } from "@material-ui/core/styles";
import waveImg from "assets/img/autoas_12_edited.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(styles);


const insideStyles = {
  background: "rgba(255,255,255,0.7)",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  boxShadow:
  "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};


  export default function ProductsSection() {
    const classes = useStyles();

    return (
      <div className={classes.section} id="products" >
      <h2 className={classes.title}>PRODUKTER</h2>
     <br></br>  
    {/* <Parallax bgImage={waveImg} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h5 className={classes.description} align="center" style={{fontSize: 20, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5></div>
      </div>
    </Parallax> */}
    <Parallax bgImage={waveImg} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h5 className={classes.description} align="center" style={{ fontSize: 21, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    {/* <Parallax bgImage={waveImg} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h5 className={classes.description} align="center" style={{ fontSize: 21, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax
      bgImage={waveImg}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}><h5 className={classes.description} align="center" style={{ fontSize: 21, color: "black", fontStyle: "italic", textShadow: "1px 1px #white"}}>
		De produkter, der bruges til klargøring (både indvendigt og udvendigt), er verdens kendet brands med en lang tradition og kvalitet i bilverdenen.
    </h5></div>
      </div>
    </Parallax>
    <h2>| | |</h2>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://i.imgur.com/8CV5WAB.png')"
          }}
        />
      </Background>
      <div>
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
        custom background component
        <br />
        <br />
      </div>
    </Parallax>
    <div style={{ height: 500 }} />
    <h2>{"\u2728"}</h2>
  </div> */}
  </div>
  )
}
