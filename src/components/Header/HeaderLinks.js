import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
import {Link} from 'react-scroll';

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

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list} >
      <ListItem className={classes.listItem}>
      <Link to="about" spy={true} smooth={true} className={classes.list}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
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
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
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
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
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
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Kontakt os
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
            <Link to="/swedish" className={classes.dropdownLink} >
              SWEDISH
            </Link>,
            <Link to="/swedish" className={classes.dropdownLink} >
            SRPSKI
          </Link>
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
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
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
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
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





// /*eslint-disable*/
// import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";
// // react components for routing our app without refresh
// // import { Link } from "react-router-dom";
// import {Link} from 'react-scroll';

// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

// // @material-ui/icons
// import LanguageIcon from '@material-ui/icons/Language';

// // core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// import Button from "components/CustomButtons/Button.js";

// import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";



// const useStyles = makeStyles({
//   customButton: {
//     background: "transparent",
//     color: "white",
//     '&:hover': {
//       background: "transparent",
//       color: "red"
//     },       
// },
// });

// export default function HeaderLinks(props) {
//   const classes = useStyles();
  
//   return (
//     <List className={classes.list}> 
//             <Link to="about" spy={true} smooth={true} className={classes.list}>
//             <Button color="transparent" target="_blank" className={classes.customButton}> Om os </Button>
//             </Link>

//             <Link to="service" spy={true} smooth={true} className={classes.list}>
//             <Button color="transparent" target="_blank" className={classes.customButton}> Trjenester </Button>
//             </Link>

//             <Link  to="products" spy={true} smooth={true} className={classes.list}>
//               <Button  color="transparent" target="_blank" className={classes.customButton} > Produkter </Button>
//           </Link>

//             <Link  to="contact" spy={true} smooth={true} className={classes.list}>
//               <Button color="transparent" target="_blank" className={classes.customButton} > Kontakt os </Button>
//             </Link>
            
//             <Link spy={true} smooth={true}  className={classes.customButton}>
//             <CustomDropdown
//           noLiPadding
//           buttonText="DK"
//           buttonProps={{
//             className: classes.navLink,
//             color: "transparent"
//           }}
//           buttonIcon={LanguageIcon}
//           dropdownList={[
//             <Link to="/" className={classes.dropdownLink}>
//               Swe
//             </Link>,
//             <a
//               href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
//               target="_blank"
//               className={classes.dropdownLink}
//             >
//               Srb
//             </a>
//           ]}
//         />
//             </Link>
            
//             {/* <ListItem className={classes.listItem}>
//         <CustomDropdown
//           noLiPadding
//           buttonText="DK"
//           buttonProps={{
//             className: classes.navLink,
//             color: "transparent"
//           }}
//           buttonIcon={LanguageIcon}
//           dropdownList={[
//             <Link to="/" className={classes.dropdownLink}>
//               Swe
//             </Link>,
//             <a
//               href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
//               target="_blank"
//               className={classes.dropdownLink}
//             >
//               Srb
//             </a>
//           ]}
//         />
    
//       </ListItem>  */}

//       {/* <ListItem className={classes.listItem}>
//         <Tooltip
//           id="instagram-facebook"
//           title="Follow us on facebook"
//           placement={window.innerWidth > 959 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             color="transparent"
//             href="https://www.facebook.com/CreativeTim?ref=creativetim"
//             target="_blank"
//             className={classes.navLink}
//           >
//             <i className={classes.socialIcons + " fab fa-facebook"} />
//           </Button>
//         </Tooltip>
//       </ListItem>
//       <ListItem className={classes.listItem}>
//         <Tooltip
//           id="instagram-tooltip"
//           title="Follow us on instagram"
//           placement={window.innerWidth > 959 ? "top" : "left"}
//           classes={{ tooltip: classes.tooltip }}
//         >
//           <Button
//             color="transparent"
//             href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
//             target="_blank"
//             className={classes.navLink}
//           >
//             <i className={classes.socialIcons + " fab fa-instagram"} />
//           </Button>
//         </Tooltip>
//       </ListItem> */}
      
//       {/* <ListItem className={classes.listItem}>
//         <Tooltip title="Delete">
//           <IconButton aria-label="Delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       </ListItem> */}
      
//     </List>
//   );
// }
