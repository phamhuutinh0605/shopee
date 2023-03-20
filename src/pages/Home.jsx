import React from "react";

import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
        <Carousel/>
        <ProductList />
        <Footer />
    </>
  );
};

export default Home;
