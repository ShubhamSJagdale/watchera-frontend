import React, { useState } from "react";
import Header from "../building_blocks/Header";
import HeroSection from "../building_blocks/HeroSection";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";
import Sidebar from "../building_blocks/Sidebar";
//Importing api call function
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  //Destruring from a values
  const {
    firstName,
    lastName,
    mobileNo,
    email,
    password,
    error,
    success,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstName, lastName, mobileNo, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            mobileNo: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log(`Error in signUP because ${err}`);
      });
  };

  const successMessage = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      Sign Up Successful Please <Link to="/signin">Log In</Link> here
    </div>
  );

  const errorMessage = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <>
      <Header />
      <HeroSection header="Sign Up" />
      <section className="login_part section_padding ">
        <div className="container">
          <div className="row align-items-center">
            <Sidebar
              header="Already a customer"
              heroLine="Log in to an  account for amazing products and offers"
              btnName="Log in"
              redirectUrl="/login"
            />
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome ! <br />
                    Please Sign up now
                  </h3>
                  {successMessage()}
                  {errorMessage()}

                  <form className="row contact_form" action="#" method="post">
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange("firstName")}
                        value={firstName}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange("lastName")}
                        value={lastName}
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange("email")}
                        value={email}
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="tel"
                        className="form-control"
                        id="mobileNo"
                        name="mobileNo"
                        placeholder="Mobile No"
                        onChange={handleChange("mobileNo")}
                        value={mobileNo}
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange("password")}
                        value={password}
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div>
                      <button
                        type="submit"
                        onClick={onSubmit}
                        value="submit"
                        className="btn_3"
                      >
                        Sign in
                      </button>
                      <a className="lost_pass" href="#">
                        forget password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShopMethod />
      <Footer />
    </>
  );
};

export default SignUp;
