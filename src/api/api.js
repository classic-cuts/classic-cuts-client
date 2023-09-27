import axios from "axios";

export const createProduct = async (data) => {
  const respose = await axios.post(
    "https://localhost:3000/product/create",
    data
  );
  return respose.data;
};

export const createProductStock = async (data, productId) => {
  const respose = await axios.post(
    `https://localhost:3000/stock/create/${productId}`,
    data
  );
  return respose.data;
};
