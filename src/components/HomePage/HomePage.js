import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
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
    this.loginUser(this.state);
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
            <button type="submit" /*onClick={this.handleLogin}*/>Login</button>
          </div>
          <Link to="/signup">Sign Up Here!</Link>
        </form>
      </div>
    );
  }
}

export default HomePage;
