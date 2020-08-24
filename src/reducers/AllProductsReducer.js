import axios from "axios";

const { default: productAddReducer } = require("./AddProductReducer");

const AllProductsReducer = function AllProductsReducer(state = null, action) {
  switch (action.type) {
    case "ALL_PRODUCTS":
      console.log(action.payload);

      return action.payload;

    case "PRODUCT_ADD":
      console.log(state);
      let newProduct = [action.payload, ...state];
      return newProduct;

    case "PRODUCT_UPDATE":
      console.log(action.payload.id);
      let filteredArray = state.filter((p) => {
        return p.id !== action.payload.id;
      });
      console.log(filteredArray);

      let updatedProduct = [action.payload, ...filteredArray];
      return updatedProduct;
  }

  return state;
};

export default AllProductsReducer;
