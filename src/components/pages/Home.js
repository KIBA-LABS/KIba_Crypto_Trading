import React from "react";
//import { Link } from "react-router-dom";
import Appbar from "../common/Appbar";
//import LoginModal from "./LoginModal";
//import LoginForm from "./Employer/LoginForm";
//import Employer_Registration from "./Employer/Employer_Registration";
//import { Button, IconButton } from "@material-ui/core";
import { useStyles } from "../common/style";
import Employer_Dashboard from "./Employer/Employer_Dashboard";
import Employer_Home from "./Employer/Employer_Home";

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Appbar />
      </div>
      {/* <Employer_Home /> */}
      {/* <div>
        <Employer_Dashboard />
      </div> */}

      {/* <Employer_Registration /> */}
      {/* <IconButton style={{ marginLeft: "90%" }}>
        <LoginModal title="Login Here">
          <LoginForm />
        </LoginModal>
      </IconButton> */}
      {/* <Link to="/employer_registration" target="_blank" style={{ marginLeft: "90%" }}>
      {/* <Button>Employer</Button>
      </Link> */}
      {/* <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}>
        <img src="job_search_portals.png" className={classes.home} />
      </div> */}
    </>
  );
}
