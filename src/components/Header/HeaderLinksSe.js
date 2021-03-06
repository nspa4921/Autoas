import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import {Link} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import LanguageIcon from '@material-ui/icons/Language';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


export default function HeaderLinksSe(props) {
  const classes = useStyles();
  
  return (
    <List className={classes.list} >
      <ListItem className={classes.listItem}>
      <Link to="about" spy={true} smooth={true} className={classes.list} >
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Om os
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="service" spy={true} smooth={true} className={classes.list}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           TJÄNSTER 
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="products" spy={true} smooth={true} className={classes.list}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Produkter 
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="contact" spy={true} smooth={true} className={classes.list}>
        <Button
          href="3"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Kontakta oss 
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText=""
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }} 
          buttonIcon={LanguageIcon}
          dropdownList={[
            <HashLink smooth to='/se' className={classes.dropdownLink}>
              SVENSKA
              </HashLink>,
            <HashLink to="/" className={classes.dropdownLink} >
            DANSK
          </HashLink>
          ]}
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/Autoas-105091244908816"
            target="_blank"
            className={classes.navLink}
          >
            <i class="fab fa-facebook-f"></i>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/autoas.dk/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}