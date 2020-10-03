import React from "react";

const Item = ({ img, title, price }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="single-popular-items mb-50 text-center">
          <div className="popular-img">
            <img src={img} alt="" />
            <div className="img-cap">
              <span>Add to cart</span>
            </div>
            <div className="favorit-items">
              <span className="flaticon-heart"></span>
            </div>
          </div>
          <div className="popular-caption">
            <h3>
              <a href="product_details.html">{title}</a>
            </h3>
            <span>&#x20b9;{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
