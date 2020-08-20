import React from "react";
import "./update.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateProductByAction } from "../actions/AddProductAction";
import { Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import logo from "../../src/images/logoo.png";
import axios from "axios";

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: 0,
      productName: "",
      productDescription: "",
      productPrice: 0,
      categoryName: "",
      inStock: true,
      quantity: 0,
      image: "",
      updated: false,

      nameError: "",
      qua: false,
      add: false,
      count: 0,
      productToUpdate: [],
    };
  }

  componentWillMount() {
    let productToUpdate = this.props.products.find((p) => {
      return p.id == this.props.history.location.state;
    });
    this.setState({
      id: productToUpdate.id,
      productName: productToUpdate.productName,
      productDescription: productToUpdate.productDescription,
      productPrice: productToUpdate.productPrice,
      categoryName: productToUpdate.categoryName,
      inStock: productToUpdate.inStock,
      quantity: productToUpdate.quantity,
      image: productToUpdate.productImage,
      count: productToUpdate.count,
    });
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";
    if (this.state.productName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.productDescription === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.productPrice === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.categoryName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.inStock === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.quantity === "") {
      nameerror = "Please enter first name";
    }

    if (this.state.quantity != 0) {
      this.setState({
        qua: false,
      });
    }

    if (this.state.image === "") {
      nameerror = "Please enter image";
    }

    if (nameerror) {
      console.log("set state for nameError");
      this.setState({
        nameError: nameerror,
      });

      return false;
    }

    this.setState({
      nameError: "",
    });
    return true;
  };

  updateProduct = (event) => {
    if (this.checkValidation()) {
      event.preventDefault();
      console.log(this.state.image);
      // var avg =
      //   (this.state.week1 +
      //     this.state.week2 +
      //     this.state.week3 +
      //     this.state.week4 +
      //     this.state.week5 +
      //     this.state.week6) /
      //   6;

      let RequestBody = {
        productName: this.state.productName,
        productDescription: this.state.productDescription,
        productPrice: this.state.productPrice,
        categoryName: this.state.categoryName,
        inStock: this.state.inStock,
        quantity: this.state.quantity,
        productImage: this.state.image,
        id: this.state.id,
      };

      axios
        .put("http://localhost:3000/allproducts/" + this.state.id, RequestBody)
        .then((res) => {
          console.log(res);
          this.props.updateProductByAction(res.data);
          this.setState(
            {
              updated: true,
            },
            () => console.log("updated")
          );
        });
    }
  };

  onChangeName = (event) => {
    this.setState({
      productName: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeDescription = (event) => {
    this.setState({
      productDescription: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangePrice = (event) => {
    this.setState({
      productPrice: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeCategory = (event) => {
    this.setState({
      categoryName: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeStock = (event) => {
    this.setState({
      inStock: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value, updated: false });

    if (this.state.quantity === 0) {
      this.setState({ qua: true });
    }

    this.checkValidation();
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
      updated: false,
    });
  };

  render() {
    return (
      <div>
        <Notification></Notification>

        <div className="message">
          {this.state.updated && (
            <div
              className="message"
              style={{
                backgroundColor: "green",
                color: "white",
                marginTop: "20px",
              }}
            >
              <Message negative>
                <Message.Header>
                  <h2
                    style={{
                      fontFamily: "TimesNewRoman",
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  >
                    Updated!!!
                  </h2>
                </Message.Header>
                <p style={{ fontFamily: "TimesNewRoman", textAlign: "center" }}>
                  You have successfully updated the product details
                </p>
              </Message>
            </div>
          )}
        </div>

        {/* <Common></Common>

        <div className="sidebar">
          <center>
            <img src={logo} className="image" alt="image" />
          </center>
          <Link to="/products">
            <a href="#">
              <i class="fas fa-backward"></i>
              <span>Back</span>
            </a>
          </Link>
          <Link to="/signup">
            <a>
              <i className="fas fa-sign-out-alt"></i>
              <span>Signout</span>
            </a>
          </Link>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="addcontent">
          {this.state.add && (
            <div style={{ backgroundColor: "green", color: "white" }}>
              <Message negative>
                <Message.Header>
                  <b
                    style={{
                      fontFamily: "TimesNewRoman",
                      fontSize: "25px",
                    }}
                  >
                    Added!!!
                  </b>
                </Message.Header>
                <p style={{ fontFamily: "TimesNewRoman" }}>
                  You have successfully added the product details
                </p>
              </Message>
            </div>
          )}

          {!this.state.add && ( */}
        <div className="wrapupdate">
          <h3
            style={{
              fontFamily: "TimesNewRoman",
              fontSize: "30px",
              textDecoration: "underline",
              color: "lightgoldenrodyellow",
              textAlign: "center",
            }}
          >
            <b>Update product</b>
          </h3>

          <form>
            <input
              type="text"
              placeholder="Product Name"
              value={this.state.productName}
              onChange={this.onChangeName}
              required
            />
            <input
              onChange={this.onChangeDescription}
              type="text"
              placeholder="Product Description"
              value={this.state.productDescription}
              required
            />
            <input
              onChange={this.onChangePrice}
              type="number"
              placeholder="Price"
              value={this.state.productPrice}
              required
            />
            {/* <input
    onChange={this.onChangeCategory}
    type="text"
    placeholder="Category"
    required
  /> */}

            <select
              onChange={this.onChangeCategory}
              id="category"
              name="category"
              value={this.state.categoryName}
            >
              <option placeholder="Category">Please select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Dress">Dress</option>
              <option value="Kids">Kids</option>
            </select>

            {/* <input
    onChange={this.onChangeStock}
    type="text"
    placeholder="Stock"
    required
    
  /> */}

            <select
              onChange={this.onChangeStock}
              id="stock"
              name="stock"
              value={this.state.inStock}
            >
              <option placeholder="In Stock">
                Please select stock availability
              </option>
              <option value="false">false</option>
              <option value="true">true</option>
            </select>

            <input
              onChange={this.onChangeQuantity}
              type="number"
              placeholder="Quantity"
              value={this.state.quantity}
              required
            />

            {this.state.qua && (
              <p style={{ color: "white", backgroundColor: "maroon" }}>
                Quantity should not be 0
              </p>
            )}

            <input
              onChange={this.onChangeImage}
              type="text"
              placeholder="Image"
              value={this.state.image}
              required
            />

            <button className="butupdate" onClick={this.updateProduct}>
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch) {
  console.log("matchdispatch");
  return bindActionCreators(
    {
      updateProductByAction: updateProductByAction, //matching action defined in actioncreator with props of the comp
    },
    dispatch
  );
}

function mapStatesToProps(store) {
  console.log(store.allproducts);
  return {
    products: store.allproducts,
  };
}

export default connect(mapStatesToProps, matchDispatchToProps)(UpdateProduct);
