import React, { Component } from "react";
import { connect } from "react-redux";
import { welcome } from "../../actions";

class Welcome extends Component {
  render() {
    if (!this.props.user || this.props.user.length === 0) {
      return "Not Authorized";
    } else {
      return (
        <div>
          {`Welcome ${this.props.user.username}`}
          <h1>{console.log(this.props.user)}</h1>
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.welcome(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { welcome }
)(Welcome);
