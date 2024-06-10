import { Box } from "@mui/material";
import React from "react";
import Header from "./header/header";
import Work from "./work/work";
import Features from "./features/features";
import Content from "./content/content";
import Gallery from "./gallery/gallery";
import Partner from "./partner/partner";
import Testimonial from "./testimonial/testimonial";
import Opentype from "./opentype/opentype";
import Map from "./map/map";
import Footer from "./footer/footer";

const Bland = () => {
  return (
    <>
      <Header />
      <Box>
        <Work />
        <Features />
        <Content />
        <Gallery />
        <Partner />
        <Testimonial />
        <Opentype />
        <Map />
      </Box>
      <Footer />
    </>
  );
};

export default Bland;
