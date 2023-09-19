import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProductContext } from "../../context/ProductContext/ProductContext";

//TODO:BE api to be updated here. works with another dummy api. however, this api would not work.
const API = "https://dummyjson.com/products";
const ProductPage = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  
  const { id } = useParams();

  const {
    id: alias,
    name,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    } = singleProduct;
  

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return <div>ProductPage {name}</div>;
};

export default ProductPage;
