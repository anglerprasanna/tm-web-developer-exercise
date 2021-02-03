import React from "react";
import FormInput from "./FormInput";
import "../styles/SignInForm.css";
import Checkbox from "./Checkbox";

class SignInForm extends React.Component {
  state = {
    email: { value: "", valid: true },
    password: { value: "", valid: true },
    rememberMe: { value: false },
    disableSubmit: true,
  };

  setEmail = (e) => {
    const value = e.target.value;
    this.setState(
      {
        email: { value: value, valid: this.isValidEmail(value) },
      },
      this.setButtonState
    );
  };

  setPassword = (e) => {
    const value = e.target.value;
    this.setState(
      {
        password: { value: value, valid: this.isValidPassword(value) },
      },
      this.setButtonState
    );
  };

  setRememberMe = (value) => {
    this.setState({ rememberMe: { value } });
  };

  setButtonState = () => {
    this.setState({
      disableSubmit: !(
        this.isValidEmail(this.state.email.value) &&
        this.isValidPassword(this.state.password.value)
      ),
    });
  };

  isValidPassword(value) {
    return value.length >= 8;
  }

  isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const http = new XMLHttpRequest();
    const url = "http://localhost:8000";
    const params =
      "email=" +
      this.state.email.value +
      "&password=" +
      this.state.password.value +
      "&remember_me=" +
      this.state.rememberMe.value;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function () {
      //Call a function when the state changes.
      if (http.readyState === 4 && http.status === 200) {
        console.log(http.responseText);
      }
    };
    http.send(params);
  };

  render() {
    return (
      <div className="sign-in-form">
        <form autoComplete="off" onSubmit={this.onFormSubmit}>
          <h1 className="form-header">Sign In</h1>
          <FormInput
            name="email"
            type="email"
            label="Email"
            onChange={this.setEmail}
            errorMessage="Invalid Email"
            autoComplete="username"
            valid={this.state.email.valid}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            onChange={this.setPassword}
            errorMessage="Password must contain at least eight characters"
            autoComplete="current-password"
            valid={this.state.password.valid}
          />
          <Checkbox
            label="Remember Me?"
            name="remember"
            id="remember"
            onChange={this.setRememberMe}
          />
          <button
            className="submit-btn"
            type="submit"
            name="submit"
            disabled={this.state.disableSubmit}
          >
            Sign In
          </button>
        </form>
        {this.props.children}
      </div>
    );
  }
}

export default SignInForm;
