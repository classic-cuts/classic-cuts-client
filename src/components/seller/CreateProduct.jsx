import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateProductComp() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    file: null,
    stocks: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 1024 * 1024 * 10) {
      toast.error("File size exceeds 10MB limit.");
    } else {
      setFormData({ ...formData, file });
    }
  };

  const handleAddStock = () => {
    const { price, color, size, discount, quantity } = formData;
    if (price && color && size && quantity) {
      const newStock = { price, color, size, discount, quantity };
      setFormData({
        ...formData,
        stocks: [...formData.stocks, newStock],
        price: "",
        color: "",
        size: "",
        discount: "",
        quantity: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!localStorage.getItem("token")) {
        return toast("Please login to continue");
      }

      const form = new FormData();
      form.append("name", formData.name);
      form.append("description", formData.description);
      form.append("category", formData.category);
      form.append("file", formData.file);

      // Convert stocks array to JSON string and append to the form data
      form.append("stocks", JSON.stringify(formData.stocks));
      const response = await fetch("http://localhost:3000/product/create", {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: form,
      });
      const responseData = await response.json();

      if (!response.ok) {
        toast.error(responseData.message);
      } else {
        toast.success(responseData.message);
        // Reset the form data
        setFormData({
          name: "",
          description: "",
          category: "",
          file: null,
          stocks: [],
        });
      }
    } catch (error) {
      console.error("Error creating product:", error);
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="">Choose a category</option>
                      <option value="MEN">MEN</option>
                      <option value="WOMEN">WOMEN</option>
                      <option value="HOUSEHOLD">HOUSEHOLD</option>
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
                        <option value="" selected>
                          Choose size
                        </option>
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
                        <option value="" selected>
                          Choose color
                        </option>
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Blue">Blue</option>
                        <option value="White">White</option>
                        <option value="Orange">Orange</option>
                        <option value="Green">Green</option>
                        <option value="Dark Green">Dark Green</option>
                        <option value="Light Blue">Light Blue</option>
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
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, JPEG up to 10MB
                      </p>
                      {formData.file ? (
                        <p className="pl-1">{formData.file.name}</p>
                      ) : (
                        <p className="pl-1">No file selected</p>
                      )}
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
      <ToastContainer />
    </div>
  );
}

export default CreateProductComp;
