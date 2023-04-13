import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
const ContactUs = () => {
  const [contactdetails, setcontactdetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [open, setOpen] = React.useState(false);

  const handlefullname = (event) => {
    setcontactdetails({
      ...contactdetails,
      [event.target.name]: event.target.value,
    });
  };

  const handlemessage = (event) => {
    setcontactdetails({
      ...contactdetails,
      [event.target.name]: event.target.value,
    });
  };

  const handlephone = (event) => {
    setcontactdetails({
      ...contactdetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleemail = (event) => {
    setcontactdetails({
      ...contactdetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(contactdetails, "contactdetails");
    setOpen(true);
  };

  return (
    <>
      

      {/* // SnackBar /// */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Successfully Submitted"
      />

      <div id="GetInTouch" className="container pt-16 mx-auto">
        <div className="lg:flex">
          {/* get in touch section */}

          <div className="py-16 rounded-tl rounded-tr bg-grey xl:w-2/5 lg:w-2/5 xl:rounded-bl xl:rounded-tr-none">
            <div className="px-8 mx-auto xl:w-5/6 xl:px-0">
              <h1 className="pb-4 text-3xl font-bold text-purple xl:text-4xl">
                Get in touch
              </h1>

              <div className="flex items-center pb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="blue"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                </div>
                <p className="pl-4 text-base text-purple">+977 9851120593</p>
              </div>
              <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="blue"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <p className="pl-4 text-base text-purple">
                  vacancy@waterflow.technology
                </p>
              </div>
              <p className="pt-10 text-lg tracking-wide text-purple">
                Lal Colony Marg, Kathmandu Ward No.1, <br />
                Kathmandu Metropolitan City, Bagmati Pradesh, Nepal
              </p>
            </div>
          </div>
          <div className="h-full pt-5 pb-5 bg-gray-200 rounded-tr rounded-br xl:w-3/5 lg:w-3/5 xl:pr-5 xl:pl-0">
            <form
              id="contact"
              className="px-8 py-4 bg-white rounded-tr rounded-br">
              <h1 className="mb-6 text-2xl font-bold text-purple">
                Enter Details
              </h1>
              <div className="flex-wrap justify-between block w-full mb-6 xl:flex">
                <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                  <div className="flex flex-col">
                    <label
                      htmlFor="full_name"
                      className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800">
                      Full Name
                    </label>
                    <input
                      required
                      id="name"
                      value={contactdetails.name}
                      name="name"
                      type="text"
                      onChange={handlefullname}
                      className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                      placeholder
                    />
                  </div>
                </div>
                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800">
                      Email
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      value={contactdetails.email}
                      onChange={handleemail}
                      className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full">
                <div className="w-2/4 max-w-xs">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800">
                      Phone
                    </label>
                    <input
                      required
                      id="phone"
                      name="phone"
                      type="tel"
                      value={contactdetails.phone}
                      onChange={handlephone}
                      className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
                      placeholder
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-col">
                  <label
                    className="mb-2 text-sm font-semibold text-gray-800"
                    htmlFor="message">
                    Message
                  </label>
                  <textarea
                    placeholder
                    name="message"
                    className="px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-indigo-700"
                    rows={8}
                    id="message"
                    value={contactdetails.message}
                    onChange={handlemessage}
                  />
                </div>
                <span className="pl-4 text-sm text-gray-400">
                  By sending a message you agree with your information being
                  stored by us in relation to dealing with your enquiry. Please
                  have a look at our{" "}
                 
                </span>
                <div class="flex mt-3 items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    for="link-checkbox"
                    class="ml-2 text-sm font-medium text-purple dark:text-gray-300">
                    I’d like to sign an NDA with Waterflow Technology
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-8 py-3 mt-4 text-sm leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
