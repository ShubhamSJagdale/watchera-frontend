import React from "react";
import Header from "../building_blocks/Header/Header";
import HeroSection from "../building_blocks/HeroSection";
import Item from "../building_blocks/Item";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";
//Import Asset
import Image1 from "../assets/img/gallery/popular1.png";
import Image2 from "../assets/img/gallery/popular2.png";
import Image3 from "../assets/img/gallery/popular3.png";
import Image4 from "../assets/img/gallery/popular4.png";
import Image5 from "../assets/img/gallery/popular5.png";
import Image6 from "../assets/img/gallery/popular6.png";

const Shop = () => {
  return (
    <>
      <Header />
      <HeroSection header="Watch Shop" />
      <section className="popular-items latest-padding">
        <div className="container">
          <div className="row product-btn justify-content-between mb-40">
            <div className="properties__button">
              {/* <!--Nav Button  --> */}
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    NewestArrivals
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Price high to low
                  </a>
                  <a
                    className="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Most populer
                  </a>
                </div>
              </nav>
              {/* <!--End Nav Button  --> */}
            </div>
            {/* <!-- Grid and List view --> */}
            <div className="grid-list-view"></div>
            {/* <!-- Select items --> */}
            <div className="select-this">
              <form action="#">
                <div className="select-itms">
                  <select name="select" id="select1">
                    <option value="">40 per page</option>
                    <option value="">50 per page</option>
                    <option value="">60 per page</option>
                    <option value="">70 per page</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Nav Card --> */}
          <div className="tab-content" id="nav-tabContent">
            {/* <!-- card one --> */}
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <Item
                  img={Image1}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
                <Item
                  img={Image2}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
                <Item
                  img={Image3}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
                <Item
                  img={Image4}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
                <Item
                  img={Image5}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
                <Item
                  img={Image6}
                  title="Thermo Ball Etip Gloves"
                  price="45,743"
                />
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

export default Shop;
