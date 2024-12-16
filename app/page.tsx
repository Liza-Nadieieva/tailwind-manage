"use client";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <body>
      {/* navbar */}
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            Blah
          </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6">
          <a href="" className="hover:text-darkGrayIsBlue">Pricing</a>
          <a href="" className="hover:text-darkGrayIsBlue">Product</a>
          <a href="" className="hover:text-darkGrayIsBlue">About Us</a>
          <a href="" className="hover:text-darkGrayIsBlue">Careers</a>
          <a href="" className="hover:text-darkGrayIsBlue">Community</a>
        </div>
        {/* button */}
        <a href="" className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>


        {/* Hamburger Icon */}
        <button id="menu-btn"
                className={`hamburger-icon ${isOpen ? "open" : ""} block hamburger md:hidden focus:outline-none `}
                onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile menu */}
      {/* <div className="md:hidden"> */}
      <div className={`${isOpen ? "flex" : "hidden"} mt-[300px]`}>
        <div id="menu" className="absolute  flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>

      </div>
      </nav>
    {/* hero section */}
    <section id="hero">
      {/* flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products 
          </h1>
          <p className="max-w-sm text-center text-darkGrayIshBlue md:text-left">
            Manage makes it simple for software teams to plan
            day-to-day tasks
            while keeping in larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
          </div>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src="https://fastly.picsum.photos/id/450/200/200.jpg?hmac=DluUYibC-zBoNHLOHsO6aHIuiA3pDhholFjiR5KcwR0" alt="" />
        </div>
      </div>
    </section>
    {/* features section */}
    <section id="features">
      {/* flex container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* whats different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
         <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
         </h2>
         <p className="max-w-sm text-center text-darkGrayIshBlue md:text-left">
            Manage provides all the funcionality your team needs,
            without the 
            complexity. Our software is tailor-made for modern digital product teams.
         </p>

        </div>
        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
         {/* LIST ITEM 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress 
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress 
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>

          </div>
          {/* list item 2  */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports 
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports 
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>
          </div>
          {/* list item 3  */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
           {/* heading */}
           <div className="rounded-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2 ">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place  
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place  
              </h3>
              <p className="text-darkGrayIshBlue">
                  See how your day-to-day taska fit into the wider vision. Go from 
                  tracking progress at the milestone level all the way done to the 
                  smallest of details. Never lose sight of the bigger picture againe.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section id="testimonials">
      {/* container to heading and testimonials blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center">
          What's different about manange?
        </h2>
        {/* testimonials container*/}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* testimoanila--1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:w-1/3">
            <img src="https://picsum.photos/100" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>

           {/* testimoanila--2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:flex md:w-1/3">
            <img src="https://picsum.photos/200" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li2
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>
           {/* testimoanila--3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-verylightGray md:flex md:w-1/3">
            <img src="https://picsum.photos/300" alt="" className="w-16 -mt-14 rounded-full"/>
            <h5 className="text-lg font-bold">
              Anisha Li3
            </h5>
            <p className="text-sm text-darkGrayIshBlue">
              See how your day-to-day taska fit into the wider vision. Go from 
              tracking progress at the milestone level all the way done to the 
              smallest of details. Never lose sight of the bigger picture againe.
            </p>
          </div>
        </div>
        {/* button */}
        <div className="my-16">
          <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        </div>
      </div>
    </section>
    {/* cta section */}
    <section id="cta" className="bg-brightRed">
      {/* flex container  */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        {/* button */}
        <div>
          <a href="" className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900">Get Started</a>
        </div>
      </div>
    </section>
    {/* footer */}
    <footer className="bg-veryDarkBlue">
      {/* flex container  */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
           Copyright &copy; 2024, All Rights Reserved
          </div>
          {/* logo */}
          <div> 
            <img src="https://picsum.photos/300" alt="" className="h-8"/>
          </div>
          {/* social links container */}
          <div className="flex justify-center space-x-4">
            {/* link 1 */}
            <a href="">
              <img src="https://picsum.photos/300" alt="" className="h-8"/>
            </a>
            {/* link 2 */}
            <a href="">
              <img src="https://picsum.photos/300" alt="" className="h-8"/>
            </a>
            {/* link 3 */}
            <a href="">
              <img src="https://picsum.photos/300" alt="" className="h-8"/>
            </a>
            {/* link 4 */}
            <a href="">
              <img src="https://picsum.photos/300" alt="" className="h-8"/>
            </a>
            {/* link 5 */}
            <a href="">
              <img src="https://picsum.photos/300" alt="" className="h-8"/>
            </a>
          </div>
        </div>
        {/* list container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>
        {/* input conatiner  */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox" />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
            </div>
          </form>
        </div>
        <div className="hidden text-white md:block">
          Copyright &copy; 2024, All Rights Reserved
        </div>

      </div>
    </footer>
    </body>
  );
}
