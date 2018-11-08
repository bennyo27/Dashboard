import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../actions";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  componentDidMount() {
    this.login();
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = () => {
    this.props.auth.login();
  };

  render() {
    return (
      <div>
        <form>
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
    user: state.user,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);
