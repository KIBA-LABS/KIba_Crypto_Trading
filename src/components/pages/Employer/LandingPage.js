import React from "react";
import { Link } from "react-router-dom";
import { alpha, makeStyles } from "@material-ui/core/styles";

//import TradeModel from "../../../model/TradeModel";
import { Button, Grid } from "@material-ui/core";

import { TextField } from "@material-ui/core";
//import BuyModal from "../BuyModal";
import BuyModal from "../BuyModal";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div
      className={classes.grow}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Grid>
          <input
            type="textarea"
            name="textValue"
            style={{
              borderWidth: "2px",
              marginTop: "4%",
              marginLeft: "25%",
              width: "50%",
              // alignSelf: "center",
            }}
          />
        </Grid>
      </div>
      <Grid>
        <h3 style={{ marginLeft: "45%" }}>url link</h3>
      </Grid>
      <Grid>
        <Button>Play store</Button>
      </Grid>
      <Grid>
        <Button>App Store</Button>
      </Grid>
      <Grid>
        <Button>Register Now</Button>
      </Grid>
      <Grid>
        <Button>Help Now</Button>
      </Grid>
      <Grid>
        <Button>Sign In</Button>
      </Grid>
      <Grid>
        <Button>Start your Free Trial</Button>
      </Grid>

      {/* <Grid>
        <TradeModel></TradeModel>
      </Grid> */}
      {/* <Grid>
        <BuyModel></BuyModel>
      </Grid> */}
      {/* <BuyModel></BuyModel> */}
    </div>
  );
}
