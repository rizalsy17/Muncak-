import React from "react";
import NavbarLanding from "../components/layouts/NavbarLanding";
import ContentLanding from "../components/layouts/ContentLanding";
import About from "../components/layouts/About";
import Footer from "../components/layouts/FooterLanding";

export default function Landing() {
  return (
    <div>
      <NavbarLanding />
      <div id="home">
        <ContentLanding />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
