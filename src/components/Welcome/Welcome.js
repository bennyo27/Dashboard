import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";

class Welcome extends Component {
  componentDidMount() {
    this.props.getUsers();
    console.log("hi");
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
        <ul>
          {this.props.user.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Welcome);
