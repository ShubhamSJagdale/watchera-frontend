import React from "react";
import Header from "../building_blocks/Header/Header";
import HeroSection from "../building_blocks/HeroSection";
import ShopMethod from "../building_blocks/ShopMethod";
import Footer from "../building_blocks/Footer";
import LatestProductDetails from "../building_blocks/LatestProductDetails";

const LatestProducts = () => {
  return (
    <>
      <Header />
      <HeroSection header="Watch Shop" />
      <LatestProductDetails />
      <ShopMethod />
      <Footer />
    </>
  );
};

export default LatestProducts;
