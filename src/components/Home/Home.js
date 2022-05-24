import React from "react";
import Contact from "../Contact/Contact";
import Partses from "../Partses/Partses";
import Subscribtion from "../Subscrition/Subscribtion";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Partses />
      <Subscribtion />
      <Contact />
    </>
  );
};

export default Home;
