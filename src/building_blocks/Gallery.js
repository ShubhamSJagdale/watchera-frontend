import React from "react";

const Gallery = ({ galleryImg1, galleryImg2, galleryImg3, galleryImg4 }) => {
  return (
    <div>
      <div className="gallery-area">
        <div className="container-fluid p-0 fix">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery mb-30">
                <div className="gallery-img big-img">
                  <img src={galleryImg1} alt="gallery" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery mb-30">
                <div className="gallery-img big-img">
                  <img src={galleryImg2} alt="gallery" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div className="gallery-img small-img">
                      <img src={galleryImg3} alt="gallery" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                  <div className="single-gallery mb-30">
                    <div className="gallery-img small-img">
                      <img src={galleryImg4} alt="gallery" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
