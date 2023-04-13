import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <>
      {" "}
      <section
        section
        data-aos="fade-down"
        // data-aos-delay="50"
        // data-aos-duration="1000"

        id="Company"
        class="mx-auto lg:ml-50">
        <h1 class="text-2xl mt-1 text-center font-bold text-purple pb-10 lg:pb-[10px] uppercase">
          About Us
        </h1>
        <div class="bg-purple hidden sm:block h-1 w-115 mx-auto lg:w-[250px]"></div>
      </section>
      <div className="px-4 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9">
        <div className="relative mt-1">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="z-20 flex items-center justify-center w-12 h-12 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden sm:block"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 48 48">
                <path
                  d="M155.469,79.103C155.009,79.037 154.52,79 154,79C150.17,79 148.031,81.021 147.211,82.028C147.078,82.201 147.007,82.413 147.007,82.632C147.007,82.638 147.007,82.644 147.006,82.649C147,83.019 147,83.509 147,84C147,84.552 147.448,85 148,85L155.172,85C155.059,84.682 155,84.344 155,84C155,84 155,84 155,84C155,82.862 155,81.506 155.004,80.705C155.004,80.135 155.167,79.58 155.469,79.103ZM178,85L158,85C157.735,85 157.48,84.895 157.293,84.707C157.105,84.52 157,84.265 157,84C157,82.865 157,81.515 157.004,80.711C157.004,80.709 157.004,80.707 157.004,80.705C157.004,80.475 157.084,80.253 157.229,80.075C158.47,78.658 162.22,75 168,75C174.542,75 177.827,78.651 178.832,80.028C178.943,80.197 179,80.388 179,80.583L179,84C179,84.265 178.895,84.52 178.707,84.707C178.52,84.895 178.265,85 178,85ZM180.828,85L188,85C188.552,85 189,84.552 189,84L189,82.631C189,82.41 188.927,82.196 188.793,82.021C187.969,81.021 185.829,79 182,79C181.507,79 181.042,79.033 180.604,79.093C180.863,79.546 181,80.06 181,80.585L181,84C181,84.344 180.941,84.682 180.828,85ZM154,67C151.24,67 149,69.24 149,72C149,74.76 151.24,77 154,77C156.76,77 159,74.76 159,72C159,69.24 156.76,67 154,67ZM182,67C179.24,67 177,69.24 177,72C177,74.76 179.24,77 182,77C184.76,77 187,74.76 187,72C187,69.24 184.76,67 182,67ZM168,59C164.137,59 161,62.137 161,66C161,69.863 164.137,73 168,73C171.863,73 175,69.863 175,66C175,62.137 171.863,59 168,59Z"
                  transform="translate(-144 -48)"
                  fill="#595bd4"
                  class="color000000 svgShape"></path>
              </svg>
            </div>
            <div className="z-20 flex items-center justify-center w-12 h-12 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden sm:block"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24">
                <path
                  d="M22,3h-1V2c0-0.5527-0.4478-1-1-1s-1,0.4473-1,1v1.5175c-0.5538,0.4134-1.0881,0.8461-1.6071,1.2943
		C15.8878,3.6797,14.024,3,12,3c-4.9624,0-9,4.0371-9,9s4.0376,9,9,9s9-4.0371,9-9c0-2.0241-0.6797-3.8879-1.8118-5.3929
		C19.6364,6.0881,20.0691,5.5538,20.4825,5H22c0.5522,0,1-0.4473,1-1S22.5522,3,22,3z M19,12c0,3.8594-3.1401,7-7,7s-7-3.1406-7-7
		s3.1401-7,7-7c1.4357,0,2.7709,0.4357,3.8829,1.1801c-0.2909,0.2767-0.5802,0.555-0.8662,0.8366
		c-0.2061,0.2069-0.4081,0.4178-0.6114,0.6274C13.6884,7.2464,12.8763,7,12,7c-2.7568,0-5,2.2432-5,5s2.2432,5,5,5s5-2.2432,5-5
		c0-0.8763-0.2464-1.6884-0.6442-2.4053c0.2097-0.2033,0.4206-0.4053,0.6274-0.6114c0.2816-0.286,0.5599-0.5753,0.8366-0.8663
		C18.5643,9.2291,19,10.5644,19,12z M15,12c0,1.6543-1.3457,3-3,3s-3-1.3457-3-3s1.3457-3,3-3c0.3458,0,0.6729,0.0706,0.9823,0.1787
		c-0.5925,0.6754-1.1614,1.3744-1.6894,2.1142c-0.2436,0.3425-0.2579,0.8166,0,1.1779c0.3253,0.4557,0.9584,0.5615,1.4142,0.2363
		c0.7398-0.528,1.4388-1.0969,2.1142-1.6894C14.9294,11.3271,15,11.6542,15,12z"
                  fill="#595bd4"
                  class="color000000 svgShape"></path>
              </svg>
            </div>

            <div className="z-20 flex items-center justify-center w-12 h-12 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="hidden sm:block"
                viewBox="0 0 32 32">
                <path
                  d="M29.81,15.42c-.21-.29-5.06-6.93-13-7.38A7.56,7.56,0,0,0,16,8c-.32,0-.64,0-1,.06C9,8.7,2.58,15,2.29,15.29a1,1,0,0,0,0,1.42C2.58,17,9,23.3,15,23.94c.32,0,.64.06,1,.06s.64,0,1-.06c6.07-.64,12.46-7,12.75-7.23A1,1,0,0,0,29.81,15.42ZM22,16a6,6,0,0,1-5.33,6c-.23,0-.45,0-.67,0s-.44,0-.66,0a6,6,0,0,1,0-11.92c.22,0,.44,0,.66,0A6,6,0,0,1,22,16ZM8.71,12.73a7.89,7.89,0,0,0,0,6.54A35.28,35.28,0,0,1,4.46,16,35.28,35.28,0,0,1,8.71,12.73Zm14.58,6.54a7.9,7.9,0,0,0-.4-7.31,19.08,19.08,0,0,1,4.75,3.95A36.72,36.72,0,0,1,23.29,19.27ZM12,16a4,4,0,1,0,4-4A4,4,0,0,0,12,16Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,18,16Z"
                  data-name="97  View, Eye, Look, Preview"
                  fill="#595bd4"
                  class="color000000 svgShape"></path>
              </svg>
            </div>
          </div>
          <hr className="absolute z-10 w-full bg-gray-200 top-2/4" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="mt-6 text-xl font-semibold leading-5 text-purple lg:text-2xl lg:leading-6">
              Meet the Team
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              True innovation happens when business, people and technology
              collide. Our focus is on creating over-whelming experience
              focusing on genuine needs of our clients and end-users.
            </p>
          </div>

          <div>
            <p className="mt-6 text-xl font-semibold leading-5 text-purple lg:text-2xl lg:leading-6">
              Mission
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              To help businesses automate their processes and provide
              exceptional support and experience to their clients.
            </p>
          </div>

          <div className="">
            <p className="mt-6 text-xl font-semibold leading-5 text-purple lg:text-2xl lg:leading-6">
              Vision
            </p>
            <p className="mt-6 text-base font-normal leading-6 text-gray-600">
              To make our products the first choice to the relevant businesses
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
