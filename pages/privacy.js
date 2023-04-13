import React from "react";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import NavbarComponent from "../components/navbar";
import PrivacyPolicy from "../components/PrivacyPolicy";

const privacy = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto font-inter">
        <PrivacyPolicy />
        <Footer2 />
      </div>
    </>
  );
};

export default privacy;
