import { Button } from "@material-tailwind/react";
import React from "react";

const HeroSection = () => {
  return (
    <div className="md:container md:mx-auto h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between md:px-[20px] md:py-[100px] ">
      <div className="space-y-5 text-center lg:text-left">
        <h1 className="text-5xl font-semibold tracking-tight text-purple md:text-6xl">
          We Make
          <br />
          Software Products
        </h1>
        <p className="text-lg font-medium text-greyish">
          We have world class products ready to be delivered
        </p>
        <button class="bg-purple  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get a Demo
        </button>
      </div>

      <div>
        <img
          className="lg:mr-20 w-[80vh] h:[500px] md:w-[400px] md:[500px] lg:w-[500px] lg:h-auto"
          src="/images/heropage.png"
          alt="waterflow technology"
        />
      </div>
    </div>
  );
};

export default HeroSection;
