import React from "react";
import { Helmet } from "react-helmet-async";

const MyHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}-BiCycle Pars</title>
    </Helmet>
  );
};

export default MyHelmet;
