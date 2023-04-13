import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 90,
    });
  }, []);
  return (
    <>
      <div>
        <section data-aos="fade-down" id="Services" class="mx-auto lg:ml-50">
          <h1 class="text-2xl mt-8 text-center font-bold text-purple pb-10 lg:pb-[10px] uppercase">
            Services
          </h1>
          <div class="bg-purple hidden sm:block h-1 w-115 mx-auto lg:w-[250px]"></div>
        </section>
        {/* left alignment */}
        <div className="container m-4 mx-auto flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <img
            data-aos="fade-right"
            className="w-full h-auto mr-0 lg:mr-20 lg:w-1/2"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
          <div
            data-aos="fade-left"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Product development</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
        </div>
        {/* Right alignment */}
        <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <div
            data-aos="fade-right"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Dedicated Software Development Team</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="w-full h-auto lg:w-1/2 lg:h-[40vh] lg:max-h-full lg:object-cover"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
        </div>

        {/* left alignment */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <img
            data-aos="fade-right"
            className="w-full h-auto mr-0 lg:mr-20 lg:w-1/2"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
          <div
            data-aos="fade-left"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Web Development</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
        </div>
        {/* Right alignment */}
        <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <div
            data-aos="fade-right"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Mobile Development</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="w-full h-auto lg:w-1/2 lg:h-[40vh] lg:max-h-full lg:object-cover"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
        </div>

        {/* left alignment */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <img
            data-aos="fade-right"
            className="w-full h-auto mr-0 lg:mr-20 lg:w-1/2"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
          <div
            data-aos="fade-left"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Saas development</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
        </div>
        {/* Right alignment */}
        <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <div
            data-aos="fade-right"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Quality Assurance</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="w-full h-auto lg:w-1/2 lg:h-[40vh] lg:max-h-full lg:object-cover"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
        </div>

        {/* left alignment */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <img
            data-aos="fade-right"
            className="w-full h-auto mr-0 lg:mr-20 lg:w-1/2"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
          <div
            data-aos="fade-left"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>UI/UX Design</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
        </div>
        {/* Right alignment */}
        <div className="container mx-auto flex flex-col lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <div
            data-aos="fade-right"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>Cyber Security Service</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="w-full h-auto lg:w-1/2 lg:h-[40vh] lg:max-h-full lg:object-cover"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
        </div>

        {/* left alignment */}
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-4 lg:px-20 py-6 lg:py-30 lg:h-[40vh]">
          <img
            data-aos="fade-right"
            className="w-full h-auto mr-0 lg:mr-20 lg:w-1/2"
            src="/images/picture1.png"
            alt="waterflow technology"
          />
          <div
            data-aos="fade-left"
            className="mt-6 text-xl font-bold lg:mt-0 lg:w-1/2">
            <h1>DevOps</h1>
            <p className="mt-2 text-lg font-medium text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at facilisis justo. Etiam accumsan, nisl vitae dapibus euismod,
              ligula dui faucibus mauris, sit amet accumsan leo ante congue
              felis. Suspendisse ante est, porttitor quis pulvinar sit amet,
              tristique vel arcu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
