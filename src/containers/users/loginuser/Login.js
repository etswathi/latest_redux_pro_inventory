import React from "react";
import "./login.css";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      nameError: "",
      invalidemail: false,
      invalidpassword: false,
      errormsg: false,
      show:false,
      passhow:false,
      showemail:false,
      showmsg:false
    };
  }

  checkValidation = () => {
    console.log("chek");
    let nameerror = "";
    let sinceerror = "";

    if (this.state.email === "") {
      nameerror = "Please enter email";
    }
   

    if (this.state.password === "") {
      nameerror = "Please enter password";
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

    if(this.state.email===''&&this.state.password==='')
    {
      this.setState({showmsg:true})
    }
    if(this.checkValidation()){
     
  
    console.log(this.state.invalidemail);
    console.log(this.state.invalidpassword);

    if (this.state.invalidemail || this.state.invalidpassword) {
      console.log("error");
      this.setState(
        {
          errormsg: true,
        },
        () => console.log(this.state.errormsg)
      );
      // this.props.history.push("/all")
    }

    if (!this.state.invalidemail && !this.state.invalidpassword) {
      this.props.history.push("/all")

    }
  }

  
   

    // emailChange = (event) => {
    //   this.setState({
    //     email: event.target.value,
    //   });
    //   this.checkValidation();
    // };
    // passwordChange = (event) => {
    //   this.setState({
    //     password: event.target.value,
    //   });
    //   this.checkValidation();
    // };
  };

  ChangeEmail = (event) => {
    this.setState({
      showmsg:false
    })

    if(event.target.value===null){
      console.log("null")
      this.setState({
        show:false
      })
    }
    console.log("emailchange")
    this.setState({
      errormsg: false,
      invalidemail: false,
      invalidpassword: false,
      show:false
    },()=>console.log(this.state.invalidemail));

    let findemail = this.props.users.find((f) => {
      return f.email === event.target.value;
    });




    console.log(findemail);
    if (findemail !== undefined) {
      console.log("not null");
      this.setState(
        {
          email: event.target.value,
          invalidemail: false,
          show:true
        },
        () => console.log(this.state.invalidemail)
      );
      this.checkValidation();
    }

    if (findemail === undefined) {
      console.log("jiiiiii");
      this.setState(
        {
          invalidemail: true,
          showemail:true
        },
        () => console.log(this.state.invalidemail)
      );
    }
    // if (!findemail) {
    //     this.setState({
    //       email: event.target.value,
    //     });
    //     this.checkValidation();
    //   }
  };
  ChangePassword = (event) => {
    this.setState({
      errormsg: false,
      invalidemail: false,
      invalidpassword: false,
      show:false,
      showpas:false,
      showmsg:false
    });
    let validarray = this.props.users.find((f) => {
      return f.email === this.state.email;
    });
    console.log(validarray)
    if (validarray.password === event.target.value) {
      this.setState({
        password: event.target.value,
        passhow:true
      });
      this.checkValidation();
    }
    if (validarray.password !== event.target.value) {
      this.setState({
        invalidpassword: true,
      },()=>console.log(this.state.invalidpassword));
    }
  };
  render() {
    return (
      <div>
        {this.state.errormsg && (
          <div
            className="message"
            style={{
              backgroundColor: "maroon",
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
                  Invalid!!!1
                </h2>
              </Message.Header>
              <p style={{ fontFamily: "TimesNewRoman", textAlign: "center" }}>
                Invalid email or password
              </p>
            </Message>
          </div>
        )}

        <h2
          style={{
            textAlign: "center",
            color: "lightgoldenrodyellow",
            marginTop: "80px",
            fontFamily: "TimesNewRoman",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Welcome
        </h2>
        <div className="wrap">
          <h3>Sign In</h3>
          {this.state.showmsg && <div>Enter vl</div>}
         

          <form>
            <input
              type="email"
              onChange={this.ChangeEmail}
              placeholder="Email"
              required
            />
            {this.state.show && (
              <div>email verified</div>
            )}
           

            <input
              type="password"
              onChange={this.ChangePassword}
              placeholder="Password"
              required
            />
             {this.state.passhow && (
              <div>pasword verified</div>
            )}

            <button className="buttonlogin" onClick={this.loginButton} >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(store) {
  console.log(store.signUpUser);
  return {
    users: store.allusers,
  };
}

export default connect(mapStateToProps)(Login);
