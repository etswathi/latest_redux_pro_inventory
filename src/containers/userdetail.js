import React from "react";
import { connect } from "react-redux";
class Userdetail extends React.Component {
  state = {};
  render() {
    if (this.props.active=== null) {
      return (
        <div>
          <hi>sorry</hi>
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.active.thumbnail} />
         <h3>{this.props.active.description}</h3> 
        </div>
      );
    }
  }
}
function mapStatesToProps(state) {
  console.log(state.active);
  return { active: state.active };
}

export default connect(mapStatesToProps)(Userdetail);
