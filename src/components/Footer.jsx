// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  //     const copyrightFooter = `
  //  <p>
  //   Copyright © ${new Date().getFullYear()} ClassicCuts
  //  </p>
  // `;

  return (
    <div className="mt-[100px] mb-5 mx-[200px]">
      <div className="flex gap-[50px]">
        <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h1 className="text-lg font-medium text-[#555]">Categories</h1>
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
            fsujaufdjs fsfks sfnsf sdf sf sf sf sfewnfiwfjw fe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[50px]">
        <div className="flex items-center">
          <span className="text-[#2879fe] font-[bold] text-[24px]">Classic cuts</span>
          {/* <div id="copyrightYear" style="background-color:rgb(112, 109, 109)">
                <span className='copyright'>document.getElementById('copyrightYear').innerHTML = copyrightFooter</span> */}
          <span className="text-xs text-[gray] ml-5">Copyright</span>
        </div>
      </div>
      {/* <div className="h-[50px]">
        <img src="../logo.png" alt="" />
      </div> */}
    </div>
  );
};

export default Footer;
