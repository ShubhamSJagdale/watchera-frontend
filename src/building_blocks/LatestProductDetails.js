import React from "react";

import gallery1 from "../assets/img/gallery/gallery1.png";

const LatestProductDetails = () => {
  return (
    <>
      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="product_img_slide owl-carousel">
                <div className="single_product_img">
                  <img src={gallery1} alt="#" className="img-fluid" />
                </div>
                <div className="single_product_img">
                  <img src={gallery1} alt="#" className="img-fluid" />
                </div>
                <div className="single_product_img">
                  <img src={gallery1} alt="#" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single_product_text text-center">
                <h3>
                  Foam filling cotton slow <br />
                  rebound pillows
                </h3>
                <p>
                  Seamlessly empower fully researched growth strategies and
                  interoperable internal or “organic” sources. Credibly innovate
                  granular internal or “organic” sources whereas high standards
                  in web-readiness. Credibly innovate granular internal or
                  organic sources whereas high standards in web-readiness.
                  Energistically scale future-proof core competencies vis-a-vis
                  impactful experiences. Dramatically synthesize integrated
                  schemas. with optimal networks.
                </p>
                <div className="card_area">
                  <div className="product_count_area">
                    <p>Quantity</p>
                    <div className="product_count d-inline-block">
                      <span className="product_count_item inumber-decrement">
                        {" "}
                        <i className="ti-minus"></i>
                      </span>
                      <input
                        className="product_count_item input-number"
                        type="text"
                        value="1"
                        min="0"
                        max="10"
                      />
                      <span className="product_count_item number-increment">
                        {" "}
                        <i className="ti-plus"></i>
                      </span>
                    </div>
                    <p>$5</p>
                  </div>
                  <div className="add_to_cart">
                    <a href="#" className="btn_3">
                      add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProductDetails;
