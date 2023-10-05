/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";

import FormatPrice from "../../helpers/FormatPrice";

const Product = (curElem) => {
  console.log("curElem", curElem)
  const { _id, name, imageUrls, imageAlt,stockData, category } =
    curElem;
    console.log(stockData.stocks)
  
  const [isHovered, setIsHovered] = useState(false);
// const Product = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [productData, setProductData] = useState(null);

//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
   
//     fetch('http://localhost:3000/product/get-all')
//       .then((response) => response.json())
//       .then((data) => {
//         setProductData(data); 
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []); 
//   console.log("productData", productData)

  const handleMouseEnter = () => {
    return setIsHovered(true);
  };

  const handleMouseLeave = () => {
    return setIsHovered(false);
  };

  return (
    <div className="group">
      <NavLink
        to={`/product/${_id}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={imageUrls.secureUrl}
            alt={name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          {isHovered && (
            <button className="absolute top-0 left-0 bg-red-400 px-3 py-2 rounded-md z-10">
              <FavoriteIcon /> Wishlist
            </button>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{stockData?.stocks?.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{<FormatPrice price={stockData?.stocks?.price}/>}</p>
        </div>
      </NavLink>
    </div>
  //   <div className="group">
  //   {productData && productData.imageUrls && (
  //     <NavLink
  //       onMouseEnter={handleMouseEnter}
  //       onMouseLeave={handleMouseLeave}
  //     >
  //       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
  //         <img
  //           src={productData.imageUrls.secureUrl}
  //           alt={productData.name}
  //           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
  //         />
  //         {isHovered && (
  //           <button className="absolute top-0 left-0 bg-red-400 px-3 py-2 rounded-md z-10">
  //             <FavoriteIcon /> Wishlist
  //           </button>
  //         )}
  //       </div>
  //       <div className="mt-4 flex justify-between">
  //         <div>
  //           <h3 className="text-sm text-gray-700">
  //             <span aria-hidden="true" className="absolute inset-0" />
  //             {productData.name}
  //           </h3>
  //           <p className="mt-1 text-sm text-gray-500">
  //             {productData.stockData.stocks[0].color}
  //           </p>
  //         </div>
  //         <p className="text-sm font-medium text-gray-900">
  //           <FormatPrice price={productData.stockData.stocks[0].price} />
  //         </p>
  //       </div>
  //     </NavLink>
  //   )}
  // </div>
  );
};

export default Product;
