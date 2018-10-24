import React from "react";
import { registerUser } from "../../actions";
import { connect } from "react-redux";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegister = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.registerUser(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleRegister}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              className="username"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="password"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
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
  {
    registerUser
  }
)(Signup);
