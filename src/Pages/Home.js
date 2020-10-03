import React from "react";
import "../styles.css";
import { API } from "../backend";
import Header from "../building_blocks/Header/Header";
import Slider from "../building_blocks/Slider";
import NewProduct from "../building_blocks/NewProduct";
import Gallery from "../building_blocks/Gallery";
import Item from "../building_blocks/Item";
import WatchChoice from "../building_blocks/WatchChoice";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";
//Import assets
import watch from "../assets/img/hero/watch.png";
import productImg1 from "../assets/img/gallery/new_product1.png";
import productImg2 from "../assets/img/gallery/new_product2.png";
import productImg3 from "../assets/img/gallery/new_product3.png";
import galleryImg1 from "../assets/img/gallery/gallery1.png";
import galleryImg2 from "../assets/img/gallery/gallery2.png";
import galleryImg3 from "../assets/img/gallery/gallery3.png";
import galleryImg4 from "../assets/img/gallery/gallery4.png";
import popularImg1 from "../assets/img/gallery/popular1.png";
import popularImg2 from "../assets/img/gallery/popular2.png";
import popularImg3 from "../assets/img/gallery/popular3.png";
import popularImg4 from "../assets/img/gallery/popular4.png";
import popularImg5 from "../assets/img/gallery/popular5.png";
import popularImg6 from "../assets/img/gallery/popular6.png";
import FirstImg from "../assets/img/gallery/choce_watch1.png";
import SecondImg from "../assets/img/gallery/choce_watch2.png";

export default function Home() {
  return (
    <>
      <Header />
      <Slider
        img={watch}
        heading="Select Your New Perfect Style"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat is aute irure."
        buttonTitle=" Shop Now"
      />
      <NewProduct
        sectionTitle="New Arrival"
        productTitle1="Thermo Ball Etip Gloves"
        productPrice1="10000"
        productImage1={productImg1}
        productTitle2="Thermo Ball Etip Gloves"
        productPrice2="15000"
        productImage2={productImg2}
        productTitle3="Thermo Ball Etip Gloves"
        productPrice3="15999"
        productImage3={productImg3}
      />
      <Gallery
        galleryImg1={galleryImg1}
        galleryImg2={galleryImg2}
        galleryImg3={galleryImg3}
        galleryImg4={galleryImg4}
      />
      <div className="popular-items section-padding30">
        <div className="container">
          {/* <!-- Section tittle --> */}
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-70 text-center">
                <h2>Popular Items</h2>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Item
              img={popularImg1}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />
            <Item
              img={popularImg2}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />{" "}
            <Item
              img={popularImg3}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />{" "}
            <Item
              img={popularImg4}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />
            <Item
              img={popularImg5}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />{" "}
            <Item
              img={popularImg6}
              title="Thermo Ball Etip Gloves"
              price="19999"
            />
          </div>
          <div className="row justify-content-center">
            <div className="room-btn pt-70">
              <a href="catagori.html" className="btn view-btn1">
                View More Products
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Watch Choice  */}
      <WatchChoice
        FirstHeading="Watch of Choice"
        FirstDetails="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
        FirstBtnTitle="Show Watches"
        FirstImg={FirstImg}
        SecondHeading="Watch of Choice"
        SecondDetails="Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
        SecondBtnTitle="Show Watches"
        SecondImg={SecondImg}
      />
      <ShopMethod />
      <Footer />
    </>
  );
}
