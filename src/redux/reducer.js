import { GET_PRODUCTS, FETCH_PRODUCT, REMOVE_SELECTED } from "./actions";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return [action.payload];

    case REMOVE_SELECTED:
      return [];

    default:
      return state;
  }
};
