import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";

const Home: React.FC = () => {
  return (
    <>
      <Navbar showSearchIcon={true} />
      <Content />
    </>
  );
};

export default Home;
