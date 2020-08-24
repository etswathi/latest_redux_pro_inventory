import React from "react";
import "./addnewproduct.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNewProductByAction } from "../../../../actions/ProductsAction";
import { Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import logo from "../../../../images/logoo.jpg";
import axios from "axios";

class AddnewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      productName: "",
      productDescription: "",
      productPrice: 0,
      categoryName: "",
      inStock: true,
      quantity: 0,
      image: "",

      nameError: "",
      qua: false,
      add: false,
      count: 0,
      added: false,
    };
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

    if (this.state.week1 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week2 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week3 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week4 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week5 === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.week6 === "") {
      nameerror = "Please enter first name";
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

  addNewProduct = (event) => {
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

      console.log(RequestBody);
      axios
        .post("http://localhost:3000/allproducts/", RequestBody)
        .then((res) => {
          console.log(res);
          this.props.addNewProductByAction(res.data);
          this.setState({
            added: true,
          });
        });
    }
  };

  onChangeName = (event) => {
    this.setState({
      productName: event.target.value,
    });
    this.checkValidation();
  };
  onChangeDescription = (event) => {
    this.setState({
      productDescription: event.target.value,
    });
    this.checkValidation();
  };
  onChangePrice = (event) => {
    this.setState({
      productPrice: event.target.value,
    });
    this.checkValidation();
  };
  onChangeCategory = (event) => {
    this.setState({
      categoryName: event.target.value,
    });
    this.checkValidation();
  };
  onChangeStock = (event) => {
    this.setState({
      inStock: event.target.value,
    });
    this.checkValidation();
  };
  onChangeQuantity = (event) => {
    this.setState({ quantity: event.target.value });

    if (this.state.quantity === 0) {
      this.setState({ qua: true });
    }

    this.checkValidation();
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div class="headernot">
          <img
            style={{ width: "60px", height: "60px", borderRadius: "60px" }}
            src={logo}
          />

          <a href="#default" class="logo">
            Inventory.com
          </a>

          <div class="headernot-right">
            <a href="#home">{this.props.count}Products</a>

            <NavLink to="/all">Home</NavLink>
          </div>
        </div>
        <div className="message">
          {this.state.added && (
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
                    Added!!!
                  </h2>
                </Message.Header>
                <p style={{ fontFamily: "TimesNewRoman", textAlign: "center" }}>
                  You have successfully added the product details
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
        <div className="wrapadd">
          <h3
            style={{
              fontFamily: "TimesNewRoman",
              fontSize: "30px",
              textDecoration: "underline",
              color: "lightgoldenrodyellow",
            }}
          >
            <b>Add new product</b>
          </h3>

          <form>
            <input
              onChange={this.onChangeName}
              type="text"
              placeholder="Product Name"
              required
            />
            <input
              onChange={this.onChangeDescription}
              type="text"
              placeholder="Product Description"
              required
            />
            <input
              onChange={this.onChangePrice}
              type="number"
              placeholder="Price"
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

            <select onChange={this.onChangeStock} id="stock" name="stock">
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
              required
            />

            <button className="butadd" onClick={this.addNewProduct}>
              Add
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
      addNewProductByAction: addNewProductByAction, //matching action defined in actioncreator with props of the comp
    },
    dispatch
  );
}

function mapStatesToProps(store) {
  console.log(store);
  return {
    count: store.allproducts.length,
  };
}

export default connect(mapStatesToProps, matchDispatchToProps)(AddnewProduct);
