import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
const Appcontainer = createContext();
const url = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const apiAccess = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const products = await response.data;
      dispatch({ type: "PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProducts = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCTS", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    apiAccess();
  }, []);
  return (
    <Appcontainer.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </Appcontainer.Provider>
  );
};
//custom hooks
const useProduct = () => {
  return useContext(Appcontainer);
};
export { AppProvider, Appcontainer, useProduct };
