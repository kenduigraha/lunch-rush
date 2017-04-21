import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {

  _handleSignIn() {
    return auth.signInWithPopup(googleAuthProvider)
  }

  render() {
    return (
      <div className="SignIn">
        <button onClick={this._handleSignIn}>
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;
