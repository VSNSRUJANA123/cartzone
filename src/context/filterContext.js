import { createContext, useContext, useEffect, useReducer } from "react";
import { useProduct } from "./productContext";
import reducer from "../reducer/FilterReducer";
export const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useProduct();
  const [state, dispatch] = useReducer(reducer, initialState);
  const setGrid = () => {
    return dispatch({ type: "SET_GRID" });
  };
  const setList = () => {
    return dispatch({ type: "SET_LIST" });
  };
  const sorting = () => {
    return dispatch({ type: "SORTING" });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  useEffect(() => {
    dispatch({ type: "SEARCH_FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products, state.sorting_value, state.filters]);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGrid,
        setList,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
