import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Contact from "../Contact/Contact";
import MyHelmet from "../MyHelmet/MyHelmet";
import Partses from "../Partses/Partses";
import Subscribtion from "../Subscrition/Subscribtion";
import Banner from "./Banner";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <MyHelmet title={` `} />

      <Banner />
      <Partses />
      <BusinessSummary />
      <Reviews />
      <Subscribtion />
      <Contact />
    </>
  );
};

export default Home;
