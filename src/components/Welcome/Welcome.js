import React, { Component } from "react";
import { connect } from "react-redux";
import { welcome } from "../../actions";
import Auth from "../Auth/auth";

class Welcome extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    console.log(userProfile);
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
    console.log(this.state);
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
        {/* <h1>{console.log(this.state.profile)}</h1> */}
        <h1>{`Welcome `}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { welcome }
)(Welcome);
