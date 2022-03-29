import React, { Fragment, useState } from "react";
//import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useStyles } from "../../common/style";
import Appbar from "../../common/Appbar";
import Footer from "../../common/Footer";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@material-ui/core";

const Employer_Registration = () => {
  const classes = useStyles();
  var [state, setState] = useState();
  // var [change, handleChange] = useState();
  // var [submit, handleSubmit] = useState();

  const formInitialSchema = {
    name: "",
    email: "",
    designation: "",
    company_name: "",
    contact: "",
    address: "",
    password: "",
  };

  const schema = yup.object().shape({
    name: yup.string().required("Full name is required"),

    email: yup
      .string()
      .required("Email is required")
      .email("Please enter valid Email"),

    designation: yup.string().required("Designation is required"),
    company_name: yup.string().required("Comany name is required"),
    contact: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    address: yup.string().required("Address is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const handleFormSubmit = (values) => {
    console.log("Submitted Values", values);
    axios
      .post("http://127.0.0.1:8000/employers/create/", values)
      .then((res) => {
        if (res.status === 201) {
          // alert("Sucessfully submitted!!");
          formik.resetForm();
        }
        console.log(res);
        console.log(res.data);
      });
  };
  const formik = useFormik({
    initialValues: formInitialSchema,
    validationSchema: schema,
    //enableReinitialize: true,
    onSubmit: handleFormSubmit,
  });

  return (
    <Fragment>
      <div>
        <Appbar />
      </div>
      {/* 
      <div
        //class="split left"
        //style={{ marginTop: "50px" }}
        className={
          //   <>
          classes.split + "" + classes.left
        }
        //   </>
        //}
      > */}
      <div className={classes.centered}>
        <img
          src="emp3.gif"
          alt="image"
          width="50%"
          style={{ marginTop: "6.6%", marginLeft: "7%" }}
        />
      </div>
      {/* </div> */}

      {/* <div class="split right">
        <div class="centered"> */}
      <div className="container">
        <div className="col-md-12 offset-md-12">
          {/* <Formik
            initialValues={formInitialSchema}
            validationSchema={schema}
            onSubmit={(values) => handleFormSubmit(values)}
          > */}
          <form
            // style={{ marginTop: "65px", width: "60%", marginLeft: "40%" }}
            onSubmit={formik.handleSubmit}
            style={{
              marginTop: "-53.5%",
              width: "40%",
              height: "auto",
              marginLeft: "70%",
              boxShadow: "0px 18px 53px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            <br />

            <div className="col-md-12 mt-0">
              {/* <b>Fill the form to create an account</b> */}

              <TextField
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Your Full Name"
                className="form-control"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              {/* <p className="text-danger">
                <ErrorMessage name="name" />
              </p> */}
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter Your Email"
                className="form-control"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              {/* <p className="text-danger">
                <ErrorMessage name="email" />
              </p> */}
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="designation"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                placeholder="Enter Your Designation"
                className="form-control"
                error={
                  formik.touched.designation &&
                  Boolean(formik.errors.designation)
                }
                helperText={
                  formik.touched.designation && formik.errors.designation
                }
              />
              {/* <p className="text-danger">
                <ErrorMessage name="designation" />
              </p> */}
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="company_name"
                name="company_name"
                value={formik.values.company_name}
                onChange={formik.handleChange}
                placeholder="Enter Your Company Name"
                className="form-control"
                error={
                  formik.touched.company_name &&
                  Boolean(formik.errors.company_name)
                }
                helperText={
                  formik.touched.company_name && formik.errors.company_name
                }
              />
              {/* <p className="text-danger">
                <ErrorMessage name="company_name" />
              </p> */}
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="contact"
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                placeholder="Enter Your Contact"
                className="form-control"
                error={formik.touched.contact && Boolean(formik.errors.contact)}
                helperText={formik.touched.contact && formik.errors.contact}
              />
              {/* <p className="text-danger">
                <ErrorMessage name="contact" />
              </p> */}
            </div>
            <div className="col-md-12 mt-2">
              <br />
              <TextField
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Enter Your Address"
                className="form-control"
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              {/* <p className="text-danger">
                <ErrorMessage name="address" />
              </p> */}
            </div>
            <div className="col-md-12 mt-4">
              <TextField
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter Your Password"
                className="form-control"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {/* <p className="text-danger">
                <ErrorMessage name="password" />
              </p> */}
            </div>
            <div className="col-md-12 mt-4">
              <button
                type="submit"
                // onClick={handleChange}
                className="btn btn-primary btn-block"
              >
                REGISTER
              </button>
            </div>
            <b style={{ marginLeft: "166px" }}>Already have an account?</b>
            <Link to="/login">
              <b> Sign In</b>
            </Link>
            <br />
            <br />
            <br />
          </form>
          {/* </Formik> */}
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* <div className={classes.myStyle}> */}

      {/* </div> */}
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Employer_Registration;
