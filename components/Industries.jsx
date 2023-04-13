import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Industries = () => {
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
        id="Industry"
        class="mx-auto lg:ml-50">
        <h1 class="text-2xl mt-14 text-center font-bold text-purple pb-10 lg:pb-[10px] uppercase">
          Industries
        </h1>
        <div class="bg-purple hidden sm:block h-1 w-115 mx-auto lg:w-[250px]"></div>
      </section>
      <div
        data-aos="zoom-in-left"
        //   data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        class="container mx-auto px-20">
        <div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 pt-15 pb-10 lg:pt-10 lg:pb-20">
            <div
              data-aos="zoom-in-left"
              data-aos-delay="90"
              class="p-6 bg-[#F7F6F2] rounded-lg">
              <div class="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 50 50">
                  <path
                    d="M49 27c0-2.757-2.243-5-5-5h-2v-3c0-9.374-7.626-17-17-17S8 9.626 8 19v3H6c-2.757 0-5 2.243-5 5v6c0 2.757 2.243 5 5 5h6V22h-2v-3c0-8.271 6.729-15 15-15s15 6.729 15 15v3h-2v16h2v5c0 1.654-1.346 3-3 3H27v2h10c2.757 0 5-2.243 5-5v-5h2c2.757 0 5-2.243 5-5v-6zm-39 9H6c-1.654 0-3-1.346-3-3v-6c0-1.654 1.346-3 3-3h4v12zm37-3c0 1.654-1.346 3-3 3h-4V24h4c1.654 0 3 1.346 3 3v6z"
                    fill="#595bd4"
                    class="color000000 svgShape"></path>
                </svg>
              </div>

              <h3 class="text-lg font-bold mb-2">Customer Services</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="90"
              class="p-6 bg-[#F7F6F2] rounded-lg">
              <div class="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 550 550">
                  <path
                    d="M501.203 300.293a38.442 38.442 0 0 0-17.536 4.194L363.66 365h-16.154a38.58 38.58 0 0 0 4.978-19c0-21.505-17.599-39-39.231-39h-124.7c-1.52 0-3.019.346-4.384 1.013L99 349.559v-1.988C99 333.71 87.37 322 73.604 322H33.621C20.045 322 9 333.471 9 347.57v127.943C9 489.244 19.815 500 33.621 500h39.982C87.607 500 99 489.016 99 475.514V474h94.55c.597 0 1.192-.054 1.78-.159l199.163-36.018a9.995 9.995 0 0 0 2.733-.917l122.141-61.771c19.383-9.832 27.169-33.574 17.356-52.925-6.855-13.519-20.466-21.917-35.52-21.917zM79 475.514c0 2.771-2.801 4.486-5.396 4.486H33.621c-2.807 0-4.621-1.761-4.621-4.486V347.57c0-2.635 1.898-5.57 4.621-5.57h39.982c2.724 0 5.396 2.759 5.396 5.57v127.944zm431.331-118.221L389.5 418.401 192.653 454H99v-82.189L190.862 327h122.392c10.604 0 19.231 8.523 19.231 19s-8.627 19-19.231 19H202c-5.523 0-10 4.478-10 10s4.477 10 10 10h164.039a9.998 9.998 0 0 0 4.502-1.071l122.152-61.595a18.65 18.65 0 0 1 8.51-2.041c7.366 0 14.307 4.303 17.684 10.962 4.825 9.516.983 21.199-8.556 26.038zM167.234 158.43c0 59.896 48.729 108.624 108.625 108.624s108.624-48.729 108.624-108.624c0-59.896-48.729-108.625-108.624-108.625S167.234 98.533 167.234 158.43zm197.249 0c0 48.867-39.756 88.624-88.624 88.624s-88.625-39.757-88.625-88.624c0-48.868 39.757-88.625 88.625-88.625s88.624 39.757 88.624 88.625z"
                    fill="#595bd4"
                    class="color000000 svgShape"></path>
                  <path
                    d="M265.931 89.63v16.945c-17.466 3.114-27.842 14.527-27.842 29.399 0 16.081 11.759 24.382 29.917 30.953 12.796 4.67 18.849 9.683 18.849 17.465 0 8.301-7.437 13.662-18.331 13.662-10.549 0-20.232-3.632-26.976-7.608l-4.67 16.255c6.226 4.15 17.12 7.263 28.015 7.609v16.774h14.181v-17.812c19.021-3.112 29.224-16.083 29.224-30.781 0-15.39-8.646-24.729-28.014-31.992-14.7-5.878-20.924-9.856-20.924-16.945 0-5.88 4.323-12.106 16.428-12.106 11.758 0 19.367 3.978 23.518 5.881l4.669-15.909c-5.534-2.769-12.97-5.361-23.864-5.708V89.63h-14.18z"
                    fill="#595bd4"
                    class="color000000 svgShape"></path>
                </svg>
              </div>

              <h3 class="text-lg font-bold mb-2">Financial Technology</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="90"
              class="p-6 bg-[#F7F6F2] rounded-lg">
              <div class="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  enable-background="new 0 0 66 66"
                  viewBox="0 0 66 66">
                  <path
                    d="M36 19.5c-.4-.4-1-.4-1.4 0-.9.9-2.3.9-3.2 0-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4.8.8 1.9 1.2 3 1.2 1.1 0 2.2-.4 3-1.2C36.4 20.5 36.4 19.9 36 19.5zM36.2 16.9H38c.6 0 1-.4 1-1s-.4-1-1-1h-1.8c-.6 0-1 .4-1 1S35.7 16.9 36.2 16.9zM30.8 15.9c0-.6-.4-1-1-1H28c-.6 0-1 .4-1 1s.4 1 1 1h1.8C30.3 16.9 30.8 16.4 30.8 15.9z"
                    fill="#595bd4"
                    class="color000000 svgShape"></path>
                  <path
                    d="M54.8,38.1c-0.9-0.5-1.8-0.9-2.7-1.2v-6.8c0-0.7-0.4-1.3-1-1.7c-0.6-0.4-1.3-0.4-2-0.1l-2,1c-1.1-1.5-2.9-2.5-4.8-2.5h-3.3
		L37.8,25c1.9-1.2,3.5-3.2,4.6-5.6c2.8-0.5,3.6-5.5,1.3-7.2C43.4,5.5,39.2,1,33,1c-6.2,0-10.4,4.5-10.7,11.2
		c-2.3,1.7-1.5,6.7,1.3,7.2c1.1,2.5,2.7,4.4,4.6,5.6l-1.3,1.9h-3.3c-1.9,0-3.7,0.9-4.8,2.5l-2-1c-0.6-0.3-1.4-0.3-2,0.1
		c-0.6,0.4-1,1-1,1.7v6.8c-0.9,0.3-1.8,0.8-2.7,1.2c-1,0.5-1.7,1.5-1.7,2.7v5.9c0,1.1,0.6,2.1,1.7,2.7c0.8,0.4,1.7,0.8,2.6,1.2
		c0,0,0.1,0,0.1,0v3.6c0,0.8,0.4,1.4,1.1,1.8l17.6,9c0,0,0,0,0,0C32.7,65,32.9,65,33,65s0.3,0,0.4-0.1c0,0,0,0,0,0l17.6-9
		c0.7-0.3,1.1-1,1.1-1.8v-3.6c0.9-0.3,1.8-0.8,2.7-1.2c1-0.5,1.7-1.5,1.7-2.7v-5.9C56.5,39.6,55.9,38.6,54.8,38.1z M33,3
		c4,0,6.9,2.2,8.1,5.8L40.5,8c-0.3-0.4-0.9-0.6-1.3-0.3c-4.1,2.6-8.2,2.6-12.3,0c-0.4-0.3-1-0.2-1.3,0.3l-0.6,0.8
		C26.1,5.2,29,3,33,3z M25.3,18c-0.2-0.4-0.5-0.7-0.9-0.7c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0v0c-0.3,0-0.9-0.6-1-1.7
		c-0.1-1.1,0.3-1.8,0.6-1.9c0.3-0.1,0.4-0.2,0.6-0.5l2.4-3.4c4.3,2.4,8.6,2.4,12.8,0l2.4,3.4c0.1,0.2,0.3,0.4,0.6,0.5
		c0.3,0.1,0.7,0.8,0.6,1.9c-0.1,1.1-0.7,1.7-1,1.7c0,0,0,0,0,0c-0.5-0.1-1,0.2-1.2,0.6c-1.5,4-4.5,6.4-7.7,6.4S26.8,22,25.3,18z
		 M33,26.5c1,0,2-0.2,3-0.5l1.5,2.2c-0.4,1.3-1.6,3.3-4.5,4.1c-2.9-0.8-4.2-2.8-4.5-4.1l1.5-2.2C31,26.3,32,26.5,33,26.5z
		 M23.6,28.9h3c0.6,1.8,2.3,4.4,6,5.4l0,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0c0,0,0,0,0,0l0,0l0,0c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0
		c3.8-1,5.5-3.5,6.1-5.4h3c1.2,0,2.3,0.5,3,1.4L33,36.6l-12.4-6.3C21.3,29.4,22.4,28.9,23.6,28.9z M12.1,47.5
		c-0.3-0.2-0.6-0.5-0.6-0.9v-5.9c0-0.4,0.2-0.7,0.6-0.9c2.2-1.1,3.6-1.6,5-1.7c0,0,0.1,0,0.1,0c0.7,0,1.2,0.5,1.2,1.2
		s-0.6,1.2-1.2,1.2c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l-2.4,0.5c-0.5,0.1-0.9,0.6-0.8,1.2c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0
		l2.2-0.5c0.7,0,1.2,0.5,1.2,1.1c0,0.6-0.5,1.1-1.2,1.2L15,44.4c-0.5-0.1-1.1,0.2-1.2,0.8c-0.1,0.5,0.2,1.1,0.8,1.2l2.4,0.5
		c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0.4,0,0.7,0.1,0.9,0.4c0.2,0.2,0.3,0.5,0.3,0.8c0,0.6-0.7,1.1-1.4,1.1v1l-0.1-1
		c-0.8,0-1.6-0.2-2.5-0.6C13.8,48.4,13.1,48.1,12.1,47.5z M15.9,51.1c0.4,0.1,0.7,0.1,1.1,0.1c0,0,0.1,0,0.1,0c1.8,0,3.3-1.3,3.4-3
		c0.1-0.9-0.2-1.7-0.8-2.3c0,0,0,0,0,0c0.5-0.6,0.9-1.3,0.9-2.2c0-0.8-0.3-1.6-0.9-2.2c0.5-0.6,0.9-1.3,0.9-2.2
		c0-1.7-1.4-3.1-3.1-3.2c0,0-0.1,0-0.1,0c-0.5,0-0.9,0-1.3,0.1v-6.3L32,38.3v24l-16.1-8.2V51.1z M50.1,54.1L34,62.4v-24l13.2-6.8
		l0,0l0,0l2.9-1.5v6.3c-0.4-0.1-0.9-0.1-1.3-0.1c-0.1,0-0.1,0-0.1,0c-1.7,0.1-3.1,1.5-3.1,3.2c0,0.8,0.3,1.6,0.9,2.2
		c-0.5,0.6-0.9,1.3-0.9,2.2c0,0.8,0.3,1.6,0.9,2.2c0,0,0,0,0,0c-0.6,0.6-0.9,1.5-0.8,2.3c0.1,1.7,1.6,3,3.4,3c0,0,0.1,0,0.1,0
		C51.2,51.1,49.4,51.2,50.1,54.1z M54.5,46.7c0,0.4-0.2,0.7-0.6,0.9c-1.5,0.8-3.2,1.6-4.9,1.7c-0.1,0-0.2,0-0.1,0
		c-0.7,0-1.3-0.5-1.4-1.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.3,0.6-0.4,0.9-0.4c0,0,0,0,0,0c0.2,0,0.2,0,2.6-0.5c0.5-0.1,0.9-0.6,0.8-1.2
		c-0.3-1.5-2.3-0.4-3.4-0.3c-0.7,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.1,1.2-1.1c1,0.1,3.1,1.2,3.4-0.3c0.1-0.5-0.2-1.1-0.8-1.2L49,40.6
		c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.7,0-1.2-0.5-1.2-1.2s0.6-1.2,1.2-1.2c0,0,0.1,0,0.1,0c1.7,0,3.5,0.9,5,1.7
		c0.3,0.2,0.6,0.5,0.6,0.9V46.7z"
                    fill="#595bd4"
                    class="color000000 svgShape"></path>
                </svg>
              </div>

              <h3 class="text-lg font-bold mb-2">Educational</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="160"
              class="p-6 bg-[#F7F6F2] rounded-lg">
              <div class="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  viewBox="0 0 24 24">
                  <g
                    data-name="Layer 2"
                    fill="#595bd4"
                    class="color000000 svgShape">
                    <path
                      d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z"
                      fill="#595bd4"
                      class="color000000 svgShape"></path>
                    <path
                      d="M9.55,15.89a1,1,0,0,0,1-.09l4-3a1,1,0,0,0,0-1.6l-4-3A1,1,0,0,0,9,9v6A1,1,0,0,0,9.55,15.89ZM11,11l1.33,1L11,13Z"
                      fill="#595bd4"
                      class="color000000 svgShape"></path>
                    <rect
                      width="2"
                      height="2"
                      x="5"
                      y="5"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="9"
                      y="5"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="13"
                      y="5"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="17"
                      y="5"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="5"
                      y="17"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="9"
                      y="17"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="13"
                      y="17"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                    <rect
                      width="2"
                      height="2"
                      x="17"
                      y="17"
                      fill="#595bd4"
                      class="color000000 svgShape"></rect>
                  </g>
                </svg>
              </div>

              <h3 class="text-lg font-bold mb-2">Media</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
