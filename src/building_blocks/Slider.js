import React from "react";
//Import assets

const Slider = ({ img, heading, description, buttonTitle }) => {
  return (
    <div>
      <div className="slider-area ">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height d-flex align-items-center slide-bg">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div className="hero__caption">
                    <h1
                      data-animation="fadeInLeft"
                      data-delay=".4s"
                      data-duration="2000ms"
                    >
                      {heading}
                    </h1>
                    <p
                      data-animation="fadeInLeft"
                      data-delay=".7s"
                      data-duration="2000ms"
                    >
                      {description}
                    </p>
                    {/* <!-- Hero-btn --> */}
                    <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                      data-duration="2000ms"
                    >
                      <a href="industries.html" className="btn hero-btn">
                        {buttonTitle}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <div
                    className="hero__img"
                    data-animation="bounceIn"
                    data-delay=".4s"
                  >
                    <img src={img} alt="" className=" heartbeat" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="single-slider slider-height d-flex align-items-center slide-bg">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div className="hero__caption">
                    <h1
                      data-animation="fadeInLeft"
                      data-delay=".4s"
                      data-duration="2000ms"
                    >
                      {heading}
                    </h1>
                    <p
                      data-animation="fadeInLeft"
                      data-delay=".7s"
                      data-duration="2000ms"
                    >
                      {description}
                    </p> */}
          {/* <!-- Hero-btn --> */}
          {/* <div
                      className="hero__btn"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                      data-duration="2000ms"
                    >
                      <a href="industries.html" className="btn hero-btn">
                        {buttonTitle}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <div
                    className="hero__img"
                    data-animation="bounceIn"
                    data-delay=".4s"
                  >
                    <img src={img} alt="" className=" heartbeat" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
