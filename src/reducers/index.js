import { combineReducers } from "redux";

import productAddReducer from "./AllProductsReducer";
import AllProductsReducer from './AllProductsReducer';
import productUpdateReducer from './AllProductsReducer'
import productDeleteReducer from './AllProductsReducer'
import signUpReducer from './AllUsersReducer'
import AllUsersReducer from "./AllUsersReducer";
const allReducers = combineReducers(
  {
    //this wl combine all reducers and pass to store to update data

    productAdd: productAddReducer,
    allproducts:AllProductsReducer,
    productUpdate:productUpdateReducer,
    allusers:AllUsersReducer,
    signUpUser:signUpReducer,
    


  },
  () => console.log("combine")
);

export default allReducers;
