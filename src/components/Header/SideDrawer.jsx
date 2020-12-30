import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
// import HeaderLinks from "./HeaderLinks";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import {Link} from 'react-scroll';
import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(styles);

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const handleDrawerToggle = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      role="presentation"
      onClick={handleDrawerToggle(anchor, false)}
      onKeyDown={handleDrawerToggle(anchor, false)}
    >
      <List >
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
           Tjenester
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
          Kontakt os
        </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText=""
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }} 
          buttonIcon={LanguageIcon}
          dropdownList={[
            <Link to="/swedish" className={classes.dropdownLink} >
              SWEDISH
            </Link>,
            <Link to="/swedish" className={classes.dropdownLink} >
            SRPSKI
          </Link>
          ]}
        />
      </ListItem> */}
      
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
            href="https://www.facebook.com/autoas"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
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
            href="https://www.instagram.com/autoas-dk"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={handleDrawerToggle("right", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onOpen={handleDrawerToggle("right", true)}
        onClose={handleDrawerToggle("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
