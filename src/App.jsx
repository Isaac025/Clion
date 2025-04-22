import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Finance from "./components/Finance";
import WhyChooseUs from "./components/WhyChooseUs";
import OurPricing from "./components/OurPricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="home h-screen max-h-[728px]">
        <Nav />
        <Hero />
      </div>
      <Finance />
      <WhyChooseUs />
      <OurPricing />
      <Footer />
    </>
  );
}

export default App;
