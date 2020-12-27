import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();

  return (
    <div className={classes.section} id="contact" style={{paddingTop: "", paddingBottom: "200px"}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9} >
          <h2 className={classes.title}>BOOK DIN TID HOS OS</h2>
          <h4 className={classes.description} align="left">
               Hvordan kan vi behandle din skade? Book din næste tid hos os, eller ringe på telefon <strong>20 78 79 55</strong>.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={11} sm={12} md={4}>
                <CustomInput
                  labelText="Dit navn"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={11} sm={12} md={4}>
                <CustomInput
                  labelText="Dit e-mail"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>

              <GridItem xs={11} sm={12} md={4}>
              <CustomInput
                labelText="Vælg en dato"
                id="date"
                formControlProps={{
                fullWidth: true
                }}
                inputProps={{
                type: "date",
                // autoFocus: true,
                defaultValue: "2021-01-01"
                }}
                />
             </GridItem>
             
              <CustomInput 
                labelText="Hvad skal vi lave for dig?"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
   
              <GridItem xs={11} sm={12} md={4}>
                <Button color="primary">Send besked</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
