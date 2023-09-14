// eslint-disable-next-line no-unused-vars

import React from "react";
const Footer = () => {
  return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            
            {/* Subscribe to newsletter */}
            <div className="max-w-xl lg:max-w-lg order-2 lg:order-1"> {/* Order changed for mobile */}
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Categories, Links, Support */}
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2 order-1 lg:order-2"> {/* Order changed for mobile */}
              <div className="lg:flex-1 flex flex-col gap-2.5 lg:text-justify sm:text-sm">
                <h1 className="lg:text-lg sm:text-sm md:text-md font-medium text-white">
                  Categories
                </h1>
                <span className="text-[gray]">Women</span>
                <span className="text-[gray]">Men</span>
                <span className="text-[gray]">Shoes</span>
                <span className="text-[gray]">Accessories</span>
                <span className="text-[gray]">New Arrivals</span>
              </div>
              <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
                <h1 className="lg:text-lg sm:text-sm md:text-md font-medium text-white">Links</h1>
                <span className="text-[gray]">FAQ</span>
                <span className="text-[gray]">Pages</span>
                <span className="text-[gray]">Store</span>
                <span className="text-[gray]">Compare</span>
                <span className="text-[gray]">Cookies</span>
              </div>
              <div className="flex-1 flex flex-col gap-2.5 text-justify text-sm">
                <h1 className="lg:text-lg sm:text-sm md:text-md font-medium text-white">Support</h1>
                <span className="text-[gray]">Payment</span>
                <span className="text-[gray]">Shipping</span>
                <span className="text-[gray]">Privacy</span>
                <span className="text-[gray]">Cancellation & return</span>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
  );
};

export default Footer;
