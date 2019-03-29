import React, { Component } from "react";

class Login extends Component {
  state = {
    // setting the state to an empty string
    username: ""
  };

  handleChanges = e => {
    // setting the state username to the target value
    this.setState({ [e.target.name]: e.target.value });
  };

  signIn = () => {
    // saving the new state to variable
    const username = {
      username: this.state.username
    };
    this.setState({
      // setting that new state to the original state while also reseting it back
      // to an empty string
      username,
      username: ""
    });
    // setting username to localStorage
    localStorage.setItem("username", this.state.username);
  };

  render() {
    return (
      <div>
        <div className="login-data">
          <form>
            <input
              className="login-input"
              value={this.state.username}
              onChange={this.handleChanges}
              name="username"
              placeholder="username"
            />
            <input
              className="login-input"
              type="password"
              placeholder="password"
            />
            <button onClick={this.signIn}>login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
