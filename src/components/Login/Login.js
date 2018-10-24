import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
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
            <button type="submit">Login</button>
          </div>
          <Link to="/register">Sign Up Here!</Link>
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
    loginUser
  }
)(Login);
