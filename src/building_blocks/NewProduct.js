import React from "react";

const NewProduct = ({
  sectionTitle,
  productTitle1,
  productPrice1,
  productImage1,
  productTitle2,
  productPrice2,
  productImage2,
  productTitle3,
  productPrice3,
  productImage3,
}) => {
  return (
    <div>
      <section className="new-product-area section-padding30">
        <div className="container">
          {/* <!-- Section tittle --> */}
          <div className="row">
            <div className="col-xl-12">
              <div className="section-tittle mb-70">
                <h2>{sectionTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-new-pro mb-30 text-center">
                <div className="product-img">
                  <img src={productImage1} alt="" />
                </div>
                <div className="product-caption">
                  <h3>
                    <a href="product_details.html">{productTitle1}</a>
                  </h3>
                  <span> &#x20b9;{productPrice1}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-new-pro mb-30 text-center">
                <div className="product-img">
                  <img src={productImage2} alt="" />
                </div>
                <div className="product-caption">
                  <h3>
                    <a href="product_details.html">{productTitle2}</a>
                  </h3>
                  <span> &#x20b9;{productPrice2}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="single-new-pro mb-30 text-center">
                <div className="product-img">
                  <img src={productImage3} alt="" />
                </div>
                <div className="product-caption">
                  <h3>
                    <a href="product_details.html">{productTitle3}</a>
                  </h3>
                  <span> &#x20b9;{productPrice3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewProduct;
