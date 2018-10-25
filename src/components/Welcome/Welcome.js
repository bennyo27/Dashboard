import React, { Component } from "react";
import { connect } from "react-redux";
import { welcome } from "../../actions";

class Welcome extends Component {
  componentDidMount() {
    this.props.welcome(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>{console.log(this.props.user)}</h1>
        {`Welcome ${this.props.user.username}`}
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
  { welcome }
)(Welcome);
