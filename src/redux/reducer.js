import { GET_PRODUCTS } from "./actions";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, action.payload];

    default:
      return state;
  }
};
