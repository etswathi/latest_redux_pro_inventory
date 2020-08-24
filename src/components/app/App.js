import React from "react";
import AddProduct from "../../containers/products/productactions/addproduct/AddProducts";
import "./app.css";
import AllProducts from "../../containers/products/allproducts/AllProducts";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UpdateProduct from "../../containers/products/productactions/updateproduct/UpdateProduct";
import Notification from "../../containers/notification/Notification";
import SignUp from "../../containers/users/signup/SignUp";
import Login from "../../containers/users/loginuser/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Notification></Notification> */}

        <Route exact path="/add" component={AddProduct}></Route>
        <Route path="/all" component={AllProducts}></Route>
        <Route path="/update" component={UpdateProduct}></Route>
        <Route exact path="/" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
