/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect, useReducer } from "react";

import axios from "axios";

import reducer from "../../reducers/ProductReducer"

const AppContext = createContext();

const API = "https://mocki.io/v1/6289ac77-a703-46e5-97b2-90e188b1cff3"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct:{},
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type:"SET_LOADING"});
      try {
        const res = await axios.get(url)
        const products = await res.data;
        dispatch({type: "SET_API_DATA", payload: products});
      } catch (error) {
        dispatch({type:"API_ERROR"});
      }  
  };

  const getSingleProduct = async(url) => {
    dispatch({type:'SET_SINGLE_LOADING'});
    try {
      const res = await axios.get(url)
        const singleProduct = await res.data;
        dispatch({type:'SET_SINGLE_PRODUCT', payload: singleProduct})
    } catch (error) { 
      dispatch({type:"SET_SINGLE_ERROR"});
     }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
