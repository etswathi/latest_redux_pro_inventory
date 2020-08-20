import React from "react";
import AddProduct from "../containers/AddProducts";
import "./app.css";
import AllProducts from "../containers/AllProducts";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import UpdateProduct from "../containers/UpdateProduct";
import Notification from "../containers/Notification";
import SignUp from "../containers/SignUp";
import Login from "../containers/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Notification></Notification> */}

        <Route exact path="/add" component={AddProduct}></Route>
        <Route path="/all" component={AllProducts}></Route>
        <Route path="/update" component={UpdateProduct}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
