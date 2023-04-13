import { useState } from "react";
import React, { useEffect } from "react";

const ClientsTestomonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* <div className="overflow-hidden text-slate-500">
        <div className="relative p-6">
          <figure className="relative z-10">
            <blockquote className="p-6 text-lg leading-relaxed">
              <p>
                Words can be like X-rays, if you use them properly—they’ll go
                through anything. You read and you’re pierced.
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-4 p-6 pt-2 text-sm text-emerald-500">
              <div className="flex flex-col gap-1">
                <span className="font-bold uppercase">George Orwell</span>
                <cite className="not-italic">
                  <a href="http://www.george-orwell.org/1984/0.html ck">
                    Nineteen Eighty-Four
                  </a>
                </cite>
              </div>
            </figcaption>
          </figure>
          <svg
            aria-hidden="true"
            className="absolute z-0 h-16 left-6 top-6"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
              className="fill-emerald-50"
            />
          </svg>
        </div>
      </div> */}
      {/* <div className="max-w-lg mx-auto">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}>
              <div className="relative px-4 py-6 bg-white rounded-md shadow-lg">
                <div className="absolute top-0 left-0 mt-3 ml-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                  />
                </div>
                <blockquote className="mt-8">
                  <p className="text-lg font-medium">{testimonial.quote}</p>
                </blockquote>
                <cite className="flex items-center mt-4">
                  <span className="font-medium">{testimonial.name}</span>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-gray-500">{testimonial.jobTitle}</span>
                </cite>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="mr-4 text-gray-600 hover:text-gray-900"
            onClick={prev}>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/200  ">
              <path
                className="heroicon-ui"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-900" onClick={next}>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="heroicon-ui"
                d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z"
              />
            </svg>
          </button>
        </div>
      </div> */}

      {/* <div class="overflow-hidden text-center bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
        <div class="relative p-6">
          <figure class="relative z-10">
            <blockquote class="p-6 text-lg leading-relaxed">
              <p>
                Words can be like X-rays, if you use them properly—they’ll go
                through anything. You read and you’re pierced.
              </p>
            </blockquote>
            <figcaption class="flex items-center gap-4 p-6 pt-2 text-sm text-emerald-500">
              <div class="flex flex-col justify-center gap-1 mx-auto">
                <span class="font-bold uppercase">George Orwell</span>
                <cite class="not-italic">
                  <a href="http://www.george-orwell.org/1984/0.html">
                    Nineteen Eighty-Four
                  </a>
                </cite>
              </div>
            </figcaption>
          </figure>
          <svg
            aria-hidden="true"
            class="absolute z-0 h-16 left-6 top-6"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
              class="fill-emerald-50"
            />
          </svg>
        </div>
      </div> */}
      {/* <section class="mx-auto lg:ml-50">
        <h1 class="text-2xl  text-center font-bold text-purple pb-10 lg:pb-[10px] uppercase">
          What Our customers are saying
        </h1>
        <div class="bg-purple hidden sm:block h-1 w-145 mx-auto lg:w-[250px]"></div>
      </section> */}

      {/* <div
        id="carouselExampleCaptions"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide>
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item>
            <p class="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, voluptas
              nostrum quisquam!"
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="smaple image"
              />
            </div>
            <p class="text-neutral-500 dark:text-neutral-300">- Anna Morian</p>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <p class="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
              "Neque cupiditate assumenda in maiores repudiandae mollitia
              adipisci maiores repudiandae mollitia consectetur adipisicing
              architecto elit sed adipiscing elit."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                class="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="smaple image"
              />
            </div>
            <p class="text-neutral-500 dark:text-neutral-300">- Teresa May</p>
          </div>
          <div
            class="relative float-left -mr-[100%] hidden w-full text-center transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            <p class="mx-auto max-w-4xl text-xl italic text-neutral-700 dark:text-neutral-300">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur est laborum neque
              cupiditate assumenda in maiores."
            </p>
            <div class="mt-12 mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                class="h-24 w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt="smaple image"
              />
            </div>
            <p class="text-neutral-500 dark:text-neutral-300">- Kate Allise</p>
          </div>
        </div>
        <button
          class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev">
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none dark:text-white dark:opacity-50 dark:hover:text-white dark:focus:text-white"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next">
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div> */}
      <section>
        <div className="container max-w-xl mx-auto">
          <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
            <blockquote className="max-w-lg text-lg italic font-medium text-center">
              We have a core team of engineers at Waterflow Technology who work
              for us full time and supplemented by 4 or 5 engineers with
              different skillsets when and if required.
            </blockquote>
            <div className="text-center dark:text-gray-400">
              <p>Jolly Amatya</p>
              <p>CEO @ Asterisk Technology</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsTestomonials;
