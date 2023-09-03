import React from "react";
import Herosection from "./Components/Herosection";
import { createContext } from "react";
import { Appcontainer, useProduct } from "./context/productContext";
const About = () => {
  const { myName } = createContext(Appcontainer);
  const data = {
    name: "CartZone About",
  };
  console.log("about us", { myName });
  return (
    <>
      <Herosection myData={data} />
    </>
  );
};

export default About;
