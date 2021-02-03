import React from "react";
import "../styles/App.css";
import SignInForm from "./SignInForm";

const App = () => {
  return (
    <div className="container">
      <SignInForm>
        <div className="helper-links">
          <a href="/">Forgot your password?</a>
          <div className="sign-up-link">
            <span>Don't have an account?</span>
            <a href="/">Sign Up</a>
          </div>
          <a href="/">Resend email confirmation</a>
        </div>
      </SignInForm>
    </div>
  );
};

export default App;
