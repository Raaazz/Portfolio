import React from "react";
import SideNav from "../componets/SideNav";
import Navbar from "../componets/Navbar";
import HomePage from "../componets/HomePage";
import About from "./About";
import Photos from "./Photos";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <SideNav />
      <Navbar />
        <HomePage />
        <About />
        <Photos/>
        <Contact/>
    </div>
  );
};

export default Home;
