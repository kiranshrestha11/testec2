import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Clientsbrand = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="mx-auto lg:ml-50">
        <h1 class="text-2xl mt-5 text-center font-bold text-purple pb-10 lg:pb-[10px] uppercase">
          Clients
        </h1>
        <div class="bg-purple hidden sm:block h-1 w-115 mx-auto lg:w-[250px]"></div>
      </section>

      <div
        data-aos="fade-down"
        data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        class="container mt-9 mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="flex flex-wrap items-center justify-center">
              <a
                href="https://merolagani.com/"
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="/images/merolagani.png"
                  alt="image"
                  class="h-10 w-full"
                />
              </a>
              <a
                href="https://mero.school/"
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="images/logo-dark.png"
                  alt="image"
                  class="h-10 w-full object-contain"
                />
              </a>

              <a
                href="https://naasasecurities.com.np/"
                class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                <img
                  src="/images/naasalogo.jpg"
                  alt="image"
                  class="h-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientsbrand;
