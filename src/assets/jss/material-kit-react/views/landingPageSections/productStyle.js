import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "60px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  responsiveImage: {
    position: "relative",
    maxWidth: "100%"
  },
  responsiveimg: {
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0,",
    left: "0",
    width: "100%",
    height: "100%"
  }
};

export default productStyle;
