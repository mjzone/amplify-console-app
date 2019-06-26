import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

import axios from "axios";

import { API } from "aws-amplify";

Amplify.configure(awsconfig);

const SLS_ENDPOINT = process.env.SLS_ENDPOINT;

class App extends React.Component {
  callAmplifyApi = () => {
    API.get("todos", "/items", {});
  };

  callSlsApi = () => {
    axios
      .get(SLS_ENDPOINT)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
          <button onClick={this.callAmplifyApi}>Call Amplify Rest API</button>
          <hr />
          <button onClick={this.callSlsApi}>Call Serverless Endpoint</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
