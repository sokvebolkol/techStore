import React, { useEffect } from "react";
import "./backgroundSignInSignUp.css";
import { Formik, Form } from "formik";
import { InputField } from "../components/Input/InputField";
import { Container, Row, Col } from "react-bootstrap";
import * as Yup from "yup";

const Login = () => {
  useEffect(() => {
    document.body.classList.add("bodyBackground"); // component didmount
    return () => {
      document.body.classList.remove("bodyBackground"); // component unmound
    };
  }, []);

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <Container>
      <Row className="p-4">
        <Col md={3}></Col>
        <Col md={6} className="bg-white p-4 mt-4 rounded-lg">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <div>
                <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                <Form>
                  <InputField label="Email" name="email" type="email" />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <button className="btn btn-dark mt-3" type="submit">
                    Login
                  </button>
                  <div className="pt-2">
                    <span className="text-secondary pt-4">
                      Already Registered ?{" "}
                    </span>
                    <a className="text-primary" href="signUp">
                      Register
                    </a>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};
export default Login;
