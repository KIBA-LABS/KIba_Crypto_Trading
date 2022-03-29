import React, { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { useStyles } from "../../common/style";
import Appbar from "../../common/Appbar";
import Footer from "../../common/Footer";

//import { Button } from "@material-ui/core";
//import Employer_Registration from "./Employer/Employer_Registration";

const LoginForm = () => {
  const classes = useStyles();

  const formInitialSchema = {
    email: "",
    password: "",
  };

  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid Email"),
    password: yup.string().required("Password is required").min(8),
  });

  const handleFormSubmit = (values) => {
    console.log("Submitted Values", values);
  };
  return (
    <Fragment>
      <div>
        <Appbar />
      </div>

      {/* <div class="split left"> */}
      <div class="centered">
        <img src="emp1.jpg" alt="employer" width="50%" />
      </div>
      {/* </div> */}

      {/* <div class="split right">
        <div class="centered">
          <div className={classes.myStyle} > */}
      <div className="container">
        <div className="col-md-12 offset-md-12">
          <Formik
            initialValues={formInitialSchema}
            validationSchema={schema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            <Form
              style={{
                marginTop: "-48%",
                width: "40%",
                //height: "40%",
                marginLeft: "60%",

                boxShadow: "0px 18px 53px 0px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="col-md-12 mt-2">
                <br />
                <b style={{ marginLeft: "50%" }}>
                  Need an account?{" "}
                  <Link to="/employer_registration">Sign UP</Link>
                </b>
                {/* <a href="Employer_Registration.js">Sign up</a> */}
                <br />
                <br />
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter Your Password"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #13547a 10%, #80d0c7 100%)",
                  }}
                >
                  LOGIN
                </button>
              </div>
              <br />
              <b style={{ marginLeft: "63%" }}>
                <Link to="#">Forget password?</Link>
              </b>
              <br />
              <br />
            </Form>
          </Formik>
        </div>
      </div>
      {/* </div>
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default LoginForm;
