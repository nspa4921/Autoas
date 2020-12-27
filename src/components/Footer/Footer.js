/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-scroll';

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
          <Link to="about" spy={true} smooth={true} className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
               Om os
              </a>
            </ListItem> 
            </Link>|
            <Link to="service" spy={true} smooth={true} className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                Tjenester
              </a>
            </ListItem>
            </Link> |
            <Link to="products" spy={true} smooth={true} className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                Produkter
              </a>
            </ListItem> 
            </Link> |
            <Link to="contact" spy={true} smooth={true} className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
              >
                Kontakt os
              </a>
            </ListItem> 
            </Link> |
          </List>
        </div>
        
        <div className={classes.right}>
          Telefon: +45 20787955 | CVR: 40825061 | E-mail: <a href="mailto:autoas19@gmail.com">autoas19@gmail.com</a>
        </div>
        
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
