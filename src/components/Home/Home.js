import React from "react";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Contact from "../Contact/Contact";
import Partses from "../Partses/Partses";
import Subscribtion from "../Subscrition/Subscribtion";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Partses />
      <BusinessSummary />
      <Subscribtion />
      <Contact />
    </>
  );
};

export default Home;
