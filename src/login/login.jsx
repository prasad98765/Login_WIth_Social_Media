import React, { Component } from "react";
import "./Login.css";
import { GoogleLogin } from "react-google-login";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId : "994968077769-qe2tiovs4ge9v3cqtqlslg27eteg4si4.apps.googleusercontent.com"
    };
  }

  onSuccess = (event) => {
   console.log("on success email",event.profileObj.email)
   console.log("on success name",event.profileObj.name)
  };

  render() {
    return (
      <>
        <div className="Login">
          <h2 className="Email_Lable">Sign In</h2>
          <div className="Email_Input">
            <input
              className="email"
              name="Email"
              type="Email"
              value={this.state.Email}
              onChange={this.handleChange}
              placeholder="Username"
            />
          </div>
          <div className="Password_Input">
            <input
              className="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              name="Password"
            />
          </div>
          <input className="Remember_Me" type="checkbox" />
          <label> Remember me</label><br></br>
          <button className="Sigin_In_Lable">
              Sign In
          </button>
          <div className="Other_Option">
              <label>---------------------- OR -----------------------</label>
          </div>
            <GoogleLogin
                clientId={this.state.clientId}
                buttonText="Sign in with Google"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                isSignedIn= {true}
                className="Google_Login"
            />
        </div>
      </>
    );
  }
}
export default SignInForm;