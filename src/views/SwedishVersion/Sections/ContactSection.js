import React, { useState } from 'react'
// @material-ui/core components
import emailjs from 'emailjs-com';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import LocationOn from "@material-ui/icons/LocationOn";
// @material-ui/icons

const useStyles = makeStyles(styles);


export default function ContactSection() {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
});
const handleChange = (name)=> (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
};

const isFormValid = () => {
    if (!values.name || !values.email || !values.message) {

  return false;}
  else {
  return true;}

};

const sendEmail = (e) => {
  emailjs.sendForm('service_5yy5zbx', 'template_msci6tj', e.target, 'user_IjIUJsD0wgltxvHFyPL2C',)
  .then((result) => {
      console.log(result.text + 'funciona');
  }, (error) => {
      console.log(error.text + 'no funciona');
  });
  e.preventDefault();
}


const handleSubmit = (e) => {
  e.preventDefault();
  alert("Tak! Vi vender tilbage med et svar på din henvendelse hurtigst muligt.");
  setValues({ name: '',
  email: '',
  date: '',
  message: '' });
    if (!isFormValid()) {
       console.log('falta algo')
    } else{ 
      sendEmail(e)
    }
};

return (
  <div className={classes.section} id="contact" style={{paddingTop: "", paddingBottom: "200px"}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={9} >
          <h2 className={classes.title}>BOKA DIN TID MED OSS</h2>
          <h4 className={classes.description} align="left"  style={{ fontSize: 18, color: "rgba(0,0,0,0.9)"}}>
          Hur kan vi behandla din skada?  Boka ditt nästa möte med oss ​​eller ring <strong>+45 20 78 79 55</strong>. 
               <br></br> <LocationOn className="slick-icons" /> <br></br>Du kan også besøge os på Højvang 4, 4300 Holbæk.  
          </h4>
          <br></br>
          <form onSubmit={(e) => handleSubmit(e)}>
          <GridContainer>
                <GridItem xs={11} sm={12} md={4}>
                  <CustomInput
                    labelText="Namn"
                    id="name"
                    required={true}
                    formControlProps={{
                      required: true,
                      fullWidth: true
                    }}
                    inputProps={{ 
                      required: true,
                      onChange: handleChange(),
                      id:'name',
                      value: values.name,
                      type: "text",
                      name: "name"
                    }}
                  />
                  </GridItem>

                <GridItem xs={11} sm={12} md={4}>
                  <CustomInput
                    labelText="E-mail"
                    id="email"
                    type='email'
                    required={true}
                    onChange={handleChange()}
                    formControlProps={{
                      required: true,
                      fullWidth: true
                    }}
                    inputProps={{
                      required: true,
                      onChange: handleChange(),
                      id:'email',
                      value: values.email,
                      type: "email",
                      name: "email"
                    }}
                  />
                  </GridItem>

                <GridItem xs={11} sm={12} md={4}>
                  <CustomInput
                    labelText="Välj ett datum "
                    id="date"
                    onChange={handleChange()}
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    type: "date",
                    name: "date",
                    onChange: handleChange(),
                    // autoFocus: true,
                    defaultValue: "2021-01-01"
                    }}
                    />
                </GridItem>


                <GridItem>
                  <CustomInput
                    labelText="Vad ska vi göra för dig? "
                    id="message"
                    required={true}
                    formControlProps={{
                      size: 'large', 
                      rows: '4',
                      required: true,
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      required: true,
                      onChange: handleChange(),
                      id:'message',
                      value: values.message,
                      type: "text",
                      autoComplete: "off",
                      name: "message"
                    }}
                  />
                </GridItem>
                <GridItem xs={11} sm={12} md={4}>
                <Button color="primary" type="submit" value="Submit">Skicka meddelande</Button>
              </GridItem>
              </GridContainer>
              </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
