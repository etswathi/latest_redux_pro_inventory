import React from "react";
import "./notification.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../../src/images/logoo.png'
class Notification extends React.Component {
  state = {};
  render() {
    return (
      <div class="headernot">
        <img style={{width:'60px',height:'60px',borderRadius:'60px'}} src={logo}/>
        <a href="#default" class="logo">
          Inventory.com
        </a>

        <div class="headernot-right">
         

          <a href="#home">{this.props.count}Products</a>

          <NavLink to="/all">Home</NavLink>
          <NavLink to="/add">Add New Product</NavLink>
        </div>
      </div>
    );
  }
}
function mapStatesToProps(store) {
  console.log(store);
  return { allproducts: store.allproducts, count: store.allproducts.length };
}

export default connect(mapStatesToProps)(Notification);
