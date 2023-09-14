// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";


const Footer = () => {

  initTE({ Input, Ripple });

  return (
    // <div className="w-full h-full pt-[20px] pb-8 bg-slate-300">

    
    // <div className="mt-[70px] mx-[200px] h-200">
    //   <div className="flex gap-[50px]">
    <div>

    
    <div className="px-6 pt-10 pb-5 bg-secondary-400 text-center">
    <form action="">
      <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div className="md:mb-6 md:ml-auto">
          <p className="text-secondary-800">
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        
        <div className="relative md:mb-6" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Email address" />
          <label
            htmlFor="exampleFormControlInput1"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
            >Email address
          </label>
        </div>

          
          <div className="mb-6 md:mr-auto">
          {/* custom': '0 4px 9px -4px #3b71ca' */}
            <button
              type="button"
              className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-custom transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-custom2 focus:bg-blue-600 focus:shadow-custom2 focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-custom2"
              data-te-ripple-init
              data-te-ripple-color="light">
              Subscribe
            </button>
          </div>
        </div>
      </form>
      </div>
      

    <div className="w-full h-full pt-[20px] pb-8 bg-slate-300">    
    
    <div className="mt-[70px] lg:mx-[200px] h-200">
      <div className="lg:flex lg:gap-[50px] sm:flex sm:gap-[10px]">
        <div className="lg:flex-1 flex flex-col gap-2.5 lg:text-justify sm:text-sm">
          <h1 className="lg:text-lg sm:text-sm md:text-md font-medium text-[#555]">Categories</h1>
          <span className="text-[gray]">Women</span>
          <span className="text-[gray]">Men</span>
          <span className="text-[gray]">Shoes</span>
          <span className="text-[gray]">Accessories</span>
          <span className="text-[gray]">New Arrivals</span>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555]">Links</h1>
          <span className="text-[gray]">FAQ</span>
          <span className="text-[gray]">Pages</span>
          <span className="text-[gray]">Store</span>
          <span className="text-[gray]">Compare</span>
          <span className="text-[gray]">Cookies</span>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555]">About</h1>
          <span className="text-[gray]">
            lorem ipsum dolot sir amet cone adipsafd elit asdfasd, sof iuhstne
            incidenti t sodlo. loremipsum dolor sit asmer o sdfdsafs, sedo sf.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555]">Contact</h1>
          <span className="text-[gray]">
            Lorem upsum sit smet sdufasdufads fas fahsdukfhads fadskf as
            fsujaufdjs fsfksasdfadsfs asda;jaeisfewnfiwfjw fe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[50px]">
        <div className="flex items-center">
          <span className="text-[#2879fe] font-[bold] text-[24px]">Classic cuts</span>
          {/* <div id="copyrightYear" style="background-color:rgb(112, 109, 109)">
                <span className='copyright'>document.getElementById('copyrightYear').innerHTML = copyrightFooter</span> */}
          <span className="text-xs text-[gray] ml-5">© Copyright 2023</span>
        </div>
      </div>
      {/* <div className="h-[50px]">
        <img src="../logo.png" alt="" />
      </div> */}
    </div>
    </div>
    </div>
  );
};

export default Footer;
