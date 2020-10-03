import React from "react";
import Header from "../building_blocks/Header/Header";
import HeroSection from "../building_blocks/HeroSection";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";

import Sidebar from "../building_blocks/Sidebar";
const SignUp = () => {
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
                  <form className="row contact_form" action="#" method="post">
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    {/* <div className="col-md-12 form-group p_star">
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        name="userName"
                        placeholder="Username"
                        required
                      />
                    </div> */}
                    <div className="col-md-12 form-group p_star">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
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
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account d-flex align-items-center">
                        <input type="checkbox" id="f-option" name="selector" />
                        <label for="f-option">Remember me</label>
                      </div>
                      <button type="submit" value="submit" className="btn_3">
                        log in
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
