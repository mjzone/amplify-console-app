import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

Amplify.configure(awsconfig);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World - Chaged!</p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
