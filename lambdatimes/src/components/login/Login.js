import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
      <form>
        <FormGroup>
          <Label for="exampleEmail">username</Label>
          <Input
            value={this.state.username}
            onChange={this.handleChanges}
            type="text"
            name="username"
            id="exampleEmail"
            placeholder="enter username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        <Button onClick={this.signIn}>Submit</Button>
      </form>
    );
  }
}

export default Login;
