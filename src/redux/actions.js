import axios from "axios";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");

  dispatch({
    type: GET_PRODUCTS,
    payload: response.data,
  });
};
