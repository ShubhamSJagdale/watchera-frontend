import React from "react";

const WatchChoice = ({
  FirstHeading,
  FirstDetails,
  FirstBtnTitle,
  FirstImg,
  SecondHeading,
  SecondDetails,
  SecondBtnTitle,
  SecondImg,
}) => {
  return (
    <div>
      <div className="watch-area section-padding30">
        <div className="container">
          <div className="row align-items-center justify-content-between padding-130">
            <div className="col-lg-5 col-md-6">
              <div className="watch-details mb-40">
                <h2>{FirstHeading}</h2>
                <p>{FirstDetails}</p>
                <a href="shop.html" className="btn">
                  {FirstBtnTitle}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="choice-watch-img mb-40">
                <img src={FirstImg} alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-10">
              <div className="choice-watch-img mb-40">
                <img src={SecondImg} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="watch-details mb-40">
                <h2>{SecondHeading}</h2>
                <p>{SecondDetails}</p>
                <a href="shop.html" className="btn">
                  {SecondBtnTitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchChoice;
