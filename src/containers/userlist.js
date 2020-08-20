import React from "react";
import { bindActionCreators } from "redux";
import { selectUser } from "../actions/index";
import { connect } from "react-redux";
class Userlist extends React.Component {
  createListItems = () => {
    return this.props.users.map((u) => {
      return (
        <li key={u.id}  
        onClick={()=>this.props.selectUser(u)} 
        >
          {u.first} {u.last}
           {/* //caling fn defined in action creator */}
        </li>
      );
    });
  };
  render() {
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStatesToProps(state) {
  return { users: state.users };
}

function matchDispatchToProps(dispatch) {
    console.log("matchdispatch")
  return bindActionCreators({
      
    selectUser:selectUser,//matching action defined in actioncreator with props of the comp
  },dispatch);
}

export default connect(mapStatesToProps,matchDispatchToProps)(Userlist);
