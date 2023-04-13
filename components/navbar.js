import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Button } from "@material-tailwind/react";

const NavbarComponent = () => {
  const [navbar, setNavbar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItem = (props) => {
    return (
      <div>
        <li>
          <a
            href={props.href}
            className="text-md font-[500]  px-2 py-1 hover:bg-gray-100 rounded transition duration-200">
            {props.text}
          </a>
        </li>
      </div>
    );
  };

  return (
    <>
      {/* <div>
        <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-[#232C93]">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-5 px- md:py-5 md:block">
              
                <Link href="/">
                  <Image
                    src="/images/logo waterflow.jpg"
                    alt="waterflowLogo"
                    height="120"
                    width="120"
                  />
                </Link>
              
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <Image
                        src="/images/close.svg"
                        width={30}
                        height={30}
                        alt="logo"
                      />
                    ) : (
                      <Image
                        src="/images/hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "p-10 md:p-0 block" : "hidden"
                }`}>
                <ul className="items-center justify-center h-screen md:h-auto md:flex ">
                  <li className="px-6 py-2 pb-6 text-xl text-center text-white md:px-6 md:border-b-0 hover:bg-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      About
                    </Link>
                  </li>
                  <li className="px-6 py-2 pb-6 text-xl text-center text-white md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Blogs
                    </Link>
                  </li>
                  <li className="px-6 py-2 pb-6 text-xl text-center text-white md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      Contact
                    </Link>
                  </li>
                  <li className="px-6 py-2 pb-6 text-xl text-center text-white md:border-b-0 hover:bg-purple-600 md:hover:text-purple-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div> */}
      {/* <Navbar className="bg-[#232C93]" fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="images/logo waterflow.jpg"
            className="h-10 w-17 sm:h-9"
            alt="Waterflow Technology Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar> */}
      {/* <div>
        <nav className="fixed z-10 w-full shadow-sm ">
          <div className="w-full">
            <div className="flex items-center w-full h-20">
              <div className="flex items-center justify-between w-full mx-20">
                <div className="flex items-center justify-center flex-shrink-0 ml-6 ">
                  <Image
                    src="/images/logo waterflow.jpg"
                    alt="waterflowLogo"
                    height="80"
                    width="80"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline mr-2 space-x-4">
                    <Link
                      activeClass="Home"
                      to="about"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 font-semibold text-blue-600 cursor-pointer text-md hover:font-black">
                      Home
                    </Link>
                    <Link
                      activeClass="about"
                      to="about"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                      About
                    </Link>
                    <Link
                      activeClass="work"
                      to="work"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                      Projects
                    </Link>

                    <Link
                      activeClass="Services"
                      to="work"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                      Services
                    </Link>

                    <Link
                      activeClass="contact"
                      to="contact"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer hover:bg-black">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex mr-10 md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-white bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 bg-white sm:px-3">
                  <Link
                    href="/home"
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    Home
                  </Link>
                  <Link
                    href="/about"
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    About
                  </Link>

                  <Link
                    href="/work"
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    Projects
                  </Link>
                  <Link
                    href="/services"
                    activeClass="services"
                    to="services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    Services
                  </Link>

                  <Link
                    href="/contact"
                    activeClass="work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-black rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div> */}
      {/* main  */}
      <div>
        <nav className="flex px-5 py-5 ">
          <div className="flex items-center ">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/logo_white.jpg"
                alt="Waterflow technology"
                width="75"
                height="75"
              />
            </div>

            <div className="hidden w-full mr-4 lg:block lg:w-auto">
              <ul className="flex uppercase text-purple ml-[25rem] items-center space-x-8">
                <NavItem href="#Services" text="Services" />
                <NavItem href="#Company" text="Company" />
                <NavItem href="#Industry" text="Industries" />
                <NavItem href="#GetInTouch" text="Get In Touch" />
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <div>
        <nav className="flex flex-wrap justify-between px-5 py-5 md:flex-row">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/logo_white.jpg"
                alt="Waterflow technology"
                width="75"
                height="75"
              />
            </div>
            <button className="flex ml-auto lg:hidden">
              <svg
                className="w-6 h-6 text-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full lg:block lg:w-auto">
            <ul className="flex items-center space-x-8 uppercase text-purple">
              <NavItem href="#Services" text="Services" />
              <NavItem href="#Company" text="Company" />
              <NavItem href="#Industry" text="Industries" />
              <NavItem href="#GetInTouch" text="Get In Touch" />
            </ul>
          </div>
          <div className="hidden lg:block">
            <button className="px-4 py-2 font-bold text-white rounded bg-purple hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </nav>
        <div className="hidden lg:block">
          <div className="py-2 bg-purple">
            <ul className="flex justify-center space-x-8 text-white uppercase">
              <NavItem href="#Services" text="Services" />
              <NavItem href="#Company" text="Company" />
              <NavItem href="#Industry" text="Industries" />
              <NavItem href="#GetInTouch" text="Get In Touch" />
            </ul>
          </div>
        </div>
        <div className="flex-grow hidden lg:block">
          <div className="py-2 bg-purple">
            <button className="px-4 py-2 ml-auto font-bold text-white rounded bg-purple hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div> */}

      {/* <nav className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className=" first-letter:ex-shrink-0">
                <img className="w-8 h-8" src="/logo.svg" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="flex justify-end ml-10 space-x-4">
                  <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                    Home
                  </a>

                  <a className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
                    About
                  </a>
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleMenu}
                aria-expanded={isOpen ? "true" : "false"}>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
              Home
            </a>

            <a className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavbarComponent;
