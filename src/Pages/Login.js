import React, { useState } from "react";
import Header from "../building_blocks/Header";
import HeroSection from "../building_blocks/HeroSection";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";
import Sidebar from "../building_blocks/Sidebar";
//Importing api call function
import { signin, authenticate, isAutheticated } from "../auth/helper/index";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    didRedirect: false,
    loading: false,
  });

  const { email, password, error, didRedirect, loading } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
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

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Sigin Request failed"));
  };
  return (
    <>
      <Header />
      <HeroSection header="Sign in" />
      <section className="login_part section_padding ">
        <div className="container">
          <div className="row align-items-center">
            <Sidebar
              header="New to our Shop?"
              heroLine="Create an account for amazing products and offers"
              btnName="CREATE AN ACCOUNT"
              redirectUrl="/signup"
            />
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome Back ! <br />
                    Please Sign in now
                  </h3>
                  <form className="row contact_form" action="#" method="post">
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onClick={handleChange("email")}
                        value={email}
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
                        onClick={handleChange("password")}
                        value={password}
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      {/* <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div> */}
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

export default Login;
