/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    // case "SET_API_DATA":
    //   const featureData = action.payload.filter((curElem) => {
    //     return curElem.featured === true;
    //   });
    case "SET_API_DATA":
      const productsData = action.payload;
      console.log("productsData",productsData);
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        // featureProducts: featureData,
        productsData: productsData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
