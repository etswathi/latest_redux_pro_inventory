import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateProductByAction } from "../../../actions/ProductsAction";
import { Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Notification from "../../notification/Notification";

import { signUpByAction } from "../../../actions/UsersAction";
import "./signup.css";
import axios from "axios";
import {getAllUsersAction} from '../../../actions/UsersAction'

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",

      updated: false,

      nameError: "",
    };
  }




  componentWillMount() {
   axios.get('http://localhost:3000/allusers').then(

   res=>{
     console.log(res.data)
     this.props.getAllUsersAction(res.data)
   }

   )
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";
    if (this.state.firstName === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.lastName === "") {
      nameerror = "Please enter last name";
    }
    if (this.state.userName === "") {
      nameerror = "Please enter first name";
    }
    if (!this.state.email.includes("@")) {
      nameerror = "Email should have @";
    }
    if (!this.state.email === "") {
      nameerror = "Please enter first name";
    }
    if (this.state.password === "") {
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

  loginButton = (e) => {
    e.preventDefault();
    console.log("login");
    this.props.history.push("/login");
  };
  signUp = (event) => {
    if (this.checkValidation()) {
      event.preventDefault();

      // var avg =
      //   (this.state.week1 +
      //     this.state.week2 +
      //     this.state.week3 +
      //     this.state.week4 +
      //     this.state.week5 +
      //     this.state.week6) /
      //   6;

      let RequestBody = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };

      axios.post('http://localhost:3000/allusers',RequestBody).then(
        res=>{
          console.log(res)
          this.props.signUpByAction(res.data);
          this.setState(
            {
              updated: true,
            },
            () => console.log("updated")
          );
        }
      )
     
     
      // this.props.history.push("/login")
    }
  };

  onChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeUserName = (event) => {
    this.setState({
      userName: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };
  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
      updated: false,
    });
    this.checkValidation();
  };

  render() {
    return (
      <div>
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
                    Signed Up!!!
                  </h2>
                </Message.Header>
                <p style={{ fontFamily: "TimesNewRoman", textAlign: "center" }}>
                  You have successfully signed up.Plese click login to continue.
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
            <b>Sign Up</b>
          </h3>

          <form>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              required
            />
            <input
              onChange={this.onChangeLastName}
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              required
            />

            {/* <input
    onChange={this.onChangeCategory}
    type="text"
    placeholder="Category"
    required
  /> */}

            {/* <input
    onChange={this.onChangeStock}
    type="text"
    placeholder="Stock"
    required
    
  /> */}

            <input
              onChange={this.onChangeUserName}
              type="text"
              placeholder="Username"
              value={this.state.userName}
              required
            />

            <input
              onChange={this.onChangeEmail}
              type="email"
              placeholder="Email"
              value={this.state.email}
              required
            />
            {/* {this.state.nameError} */}
            <input
              onChange={this.onChangePassword}
              type="text"
              placeholder="Password"
              value={this.state.password}
              required
            />

            <button type="submit" className="butsignup" onClick={this.signUp}>
              Continue
            </button>

            <h3 style={{ textAlign: "center" }}>OR</h3>

            <p style={{ textAlign: "center" }}>
              Already have an account?
              <button
                
                onClick={this.loginButton}
                style={{ cursor: "pointer", color: "white" }}
              >
                Login
              </button>
            </p>
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
      signUpByAction: signUpByAction,
      getAllUsersAction:getAllUsersAction 
      //matching action defined in actioncreator with props of the comp
    },
    dispatch
  );
}

function mapStatesToProps(store) {
  console.log(store.allusers);
  return {
    newuser: store.signUpUser,
    
  };
}

export default connect(mapStatesToProps, matchDispatchToProps)(UpdateProduct);
