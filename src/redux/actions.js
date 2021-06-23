import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const REMOVE_SELECTED = "REMOVE_SELECTED";

export const getProducts = () => async (dispatch) => {
  const response = await axios.get(
    "https://fakestoreapi.com/products?sort=desc"
  );

  dispatch({
    type: GET_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

  dispatch({
    type: FETCH_PRODUCT,
    payload: response.data,
  });
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED,
  };
};
