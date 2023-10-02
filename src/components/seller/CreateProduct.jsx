import { useState } from "react";

import { PhotoIcon } from "@heroicons/react/24/solid";

function CreateProductComp() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    discount: "",
    size: "",
    images: null,
    color: "",
    quantity: "",
    stocks: [],
  });

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    } catch (error) {
      console.error("Error in handleChange:", error);
    }
  };

  const handleAddStock = () => {
    try {
      const { size, color, quantity, price, discount, stocks } = formData;
      if (
        (stocks.length === 0 && !size) ||
        (stocks.length === 0 && !color) ||
        (stocks.length === 0 && !Number(price)) ||
        !price ||
        (stocks.length === 0 && !quantity)
      ) {
        // console.log("formData", formData);
        console.log("Please enter all the details");
        return;
      }

      const newStockItem = {
        size,
        color,
        quantity,
        price,
        discount,
      };
      stocks.push(newStockItem);
      setFormData({
        ...formData,
        // stocks: [...formData.stocks, newStockItem],
        size: "",
        color: "",
        quantity: "",
        price: "",
        discount: "",
      });
      console.log("formData", formData);
    } catch (error) {
      console.error("Error in handleAddStock:", error);
    }
  };

  const handleImageChange = (e) => {
    try {
      setFormData({ ...formData, images: [e.target.files] });
      console.log(formData);
    } catch (error) {
      console.error("Error in handleImageChange:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("description", formData.description);
      form.append("category", formData.category);
      // form.append("images", formData.images);
      if (formData.images) {
        formData.images.forEach((image, index) => {
          form.append(`images-${index}`, image);
        });
      }
      form.append("stocks", JSON.stringify(formData.stocks));

      console.log("formData", formData);

      const response = await fetch(
        "http://localhost:3000/product/create",

        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEzY2FmZmMyNDU0ZTA5MTIwZGUzY2YiLCJpYXQiOjE2OTU5NzMxMDUsImV4cCI6MTY5NjAwMTkwNX0.UqHr3Vr7Duxvdp5zcIhBSl1rs6gYIMW2l2KWOvmGkXg",
          },
          body: form,
        }
      );
      if (response.status !== 200) {
        throw new Error(`Failed to create product: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Public ID:", data.publicId);
      console.log("Secret URL:", data.secretUrl);
      console.log("res", data);
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        discount: "",
        size: "",
        images: null,
        color: "",
        quantity: "",
        stocks: [],
      });
    } catch (error) {
      console.error("Error creating product and stock:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="py-[4rem] min-h-full justify-center flex flex-1 flex-col lg:px-[8rem]">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="mb-3 capitalize leading-7 text-gray-900 text-2xl font-bold tracking-tight sm:text-3xl">
                Create a product
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Congratulations! You are about to be a seller.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Product Name */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        id="name"
                        onChange={handleChange}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Basic men's shirt"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Category */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      type="text"
                      id="category"
                      name="category"
                      onChange={handleChange}
                      value={formData.category}
                      // defaultValue="Men"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="House appliances">House appliances</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4 col-span-full mt-8">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
                    Stock Information
                  </h2>
                  <div className="flex gap-x-9">
                    <div className="sm:col-span-4 w-[8rem] mt-8">
                      <select
                        id="size"
                        name="size"
                        onChange={handleChange}
                        value={formData.size}
                        defaultValue="XS"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>

                    <div className="sm:col-span-4 w-[8rem] mt-8">
                      <select
                        id="color"
                        name="color"
                        onChange={handleChange}
                        defaultValue="Red"
                        value={formData.color}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="White">White</option>
                        <option value="Orange">Orange</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-4 mt-8">
                    <div className="mt-4 w-[10rem]">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quantity
                      </label>
                      <input
                        name="quantity"
                        type="number"
                        id="quantity"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Price */}
                    <div className="flex gap-x-6 mt-8 mb-10">
                      <div className="w-[10rem]">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Price
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            onChange={handleChange}
                            value={formData.price}
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                              Currency
                            </label>
                            <select
                              id="currency"
                              name="currency"
                              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                              <option>INR</option>
                              <option>USD</option>
                              <option>EUR</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Discount Price */}

                      <div className="w-[10rem]">
                        <label
                          htmlFor="discount"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Discount
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">₹</span>
                          </div>
                          <input
                            type="number"
                            value={formData.discount}
                            onChange={handleChange}
                            name="discount"
                            id="discount"
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                              Currency
                            </label>
                            <select
                              id="currency"
                              name="currency"
                              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                              <option>INR</option>
                              <option>USD</option>
                              <option>EUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-4 px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleAddStock}
                  >
                    Add Stock
                  </button>
                </div>

                {/* Product Description */}
                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      placeholder="Made with pure cotton..."
                      type="text"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={7}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about your product.
                  </p>
                </div>

                {/* Product images */}
                <div className="col-span-full">
                  <label
                    htmlFor="images"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Product Images
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="images"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            accept="image/*"
                            id="images"
                            name="images"
                            type="file"
                            onChange={handleImageChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    {/* {formData.images} */}
                    {/* <ul>
                      {formData.images &&
                        formData.images.map((image) => (
                          <li key={image.name}>
                            <img src={URL.createObjectURL(image)} alt={image.name} />
                          </li>
                        ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit/cancel button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductComp;
