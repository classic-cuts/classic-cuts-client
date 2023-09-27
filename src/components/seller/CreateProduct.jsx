import { useState } from "react";

import { PhotoIcon } from "@heroicons/react/24/solid";

import { createProduct, createProductStock } from "../../api/api";

const CreateProductComp = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  // const [imageUrls, setImageUrls] = useState([0]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState([]);

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

  const handleSizeChange = (size) => {
    // Toggle the selected size
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // const handleAddStock = () => {
  //   if (color && quantity && selectedSizes.length > 0) {
  //     // Create a unique key for each stock entry based on size and color
  //     const stockEntryKey = selectedSizes.join("_") + "_" + color;
  //     setStock({
  //       ...stock,
  //       [stockEntryKey]: {
  //         sizes: selectedSizes,
  //         color,
  //         quantity: parseInt(quantity, 10), // Ensure quantity is an integer
  //       },
  //     });
      
      
  //     setColor("");
  //     setQuantity("");
  //     setSelectedSizes([]);
  //   }
  // };

  const handleAddStock = () => {
    if (color && quantity && price) {
      const stockEntry = {
        size: selectedSizes,
        color,
        quantity: parseInt(quantity, 10),
        price: parseFloat(price), // Ensure price is a floating-point number
      };
      setStock([...stock, stockEntry]);
      setColor("");
      setQuantity("");
      setPrice("");
    }
  };

  const handleDescriptionChange = (e) => {
    const checkDescription = e.target.value;
    if (checkDescription.length > 1000) {
      console.log("Description cannot exceed 1000 characters.");
      // toast.error('The product description is too long.')
    } else {
      setDescription(checkDescription);
    }
  };

  const handlePriceChange = (e) => {
    const checkPrice = e.target.value;
    if (!isNaN(checkPrice)) {
      setPrice(checkPrice);
    } else {
      setPriceError("Price must be a valid number");
      console.log(priceError);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = {
        name,
        description,
        price,
        discount,
        category,
        // imageUrls,
      };

      // const productResponse = await createProduct(product);
  
      // alternate option to store stock
      const stock = {
        selectedSizes,
        color,
        quantity,
      };
      // const stockResponse = await createProductStock(
        //   stock,
        //   productResponse.data.id
        // );
      
  
      console.log("product", product);
      console.log("stock", stock);
      // alternate option to store stock
  
      // const stock = [];
      // selectedSizes.forEach((size) => {
      //   // Iterate over colors
      //   color.forEach((color) => {
      //     // Create a stock entry for each combination of size and color
      //     const stockEntry = {
      //       size,
      //       color,
      //       quantity: quantity[size + "_" + color] || 0,
      //     };
          
      //     // Add the stock entry to the stock array
      //     stock.push(stockEntry);
      //   });
      // }); 
  
        setName("");
        setDescription("");
        setPrice("");
        setPriceError("");
        setDiscount("");
        setCategory("")
        setStock({});
    } catch (error) {
      console.error("Error creating product and stock:", error);
      
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-22 py-12 lg:px-8">
      <form onSubmit={handleSubmit}>
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
                  Product Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      id="name"
                      onChange={(e) => setName(e.target.value)}
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
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="House appliances">House appliances</option>
                  </select>
                </div>
              </div>

              {/* Product Stock */}
              {/* <div className="sm:col-span-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2">
                  Select sizes
                </h2>
                <div className="space-x-4">
                  {sizes.map((size) => (
                    <label key={size} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600 h-5 w-5"
                        value={size}
                        onChange={() => handleSizeChange(size)}
                        checked={selectedSizes.includes(size)}
                      />
                      <span className="ml-2 text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-4 w-[10rem]">
                  <label
                    htmlFor="color"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>

                <div className="mt-4 w-[10rem]">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleAddStock}
                  >
                    Add Stock
                  </button>
                </div> */}

                {/* Display the stock entries */}
                {/* <div className="mt-4">
                  <h2 className="text-lg font-semibold">Stock Summary: </h2>
                  <ul className="mt-2 space-y-2">
                    {Object.keys(stock).map((stockEntryKey) => (
                      <li key={stockEntryKey}>
                        Size: {stock[stockEntryKey].sizes.join(", ")}, Color:{" "}
                        {stock[stockEntryKey].color}, Quantity:{" "}
                        {stock[stockEntryKey].quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}


              <div className="sm:col-span-4 mt-8">
  <h2 className="text-lg font-medium leading-6 text-gray-900">Stock Information</h2>
  <table className="mt-4">
    <thead>
      <tr>
        <th>Size</th>
        <th>Color</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    <div className="space-x-4">
                  {sizes.map((size) => (
                    <label key={size} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-indigo-600 h-5 w-5"
                        value={size}
                        onChange={() => handleSizeChange(size)}
                        checked={selectedSizes.includes(size)}
                      />
                      <span className="ml-2 text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
      {selectedSizes.map((size) => (
        <tr key={size}>
          <td>{size}</td>
          <td>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </td>
          <td>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <button
    className="mt-4 px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    onClick={handleAddStock}
  >
    Add Stock
  </button>
  {/* Display the stock entries */}
                 <div className="mt-4">
                  <h2 className="text-lg font-semibold">Stock Summary: </h2>
                  <ul className="mt-2 space-y-2">
                    {Object.keys(stock).map((stockEntryKey) => (
                      <li key={stockEntryKey}>
                        Size: {stock[stockEntryKey].sizes.join(", ")}, Color:{" "}
                        {stock[stockEntryKey].color}, Quantity:{" "}
                        {stock[stockEntryKey].quantity}
                      </li>
                    ))}
                  </ul>
                </div>
</div>

              {/* alternate way to record the size input */}
              {/* <div className="sm:col-span-4">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 mb-2">
                      Select sizes
                    </h2>
                    {sizeOptions.map((size) => (
                      <label key={size}>
                        <input
                          type="checkbox"
                          value={size}
                          checked={sizes.includes(size)}
                          onChange={handleSizeChange}
                          className="mr-3 ml-3"
                        />
                        {size}
                      </label>
                    ))}
                  </div> */}
              {/* alternate way to record the size input */}

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
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={7}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about your product.
                </p>
              </div>

              {/* Product Price */}
              <div>
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
                    onChange={handlePriceChange}
                    value={price}
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
                {priceError && <p className="text-red-500">{priceError} </p>}
              </div>

              {/* Discount Price */}
              <div>
                <label
                  htmlFor="discount-price"
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
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    name="discount-price"
                    id="discount-price"
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

              {/* not in use */}
              {/* <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Stock
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="number"
                    
                    
                    name="stock"
                    id="stock"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Quantity"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Stock
                    </label>
                  </div>
                </div>
              </div> */}
              {/* not is use */}

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
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          onChange={handleImageChange}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <ul>
                    {selectedImages.map((image) => (
                      <li key={image.name}>{image.name}</li>
                    ))}
                  </ul>
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
  );
};

export default CreateProductComp;
