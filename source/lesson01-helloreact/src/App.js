import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>{" "}
        <h2>Hra</h2>
        <p className="App-intro">
          Để bắt đầu học vui lòng truy cập <code> src / App.js </code> chỉnh sửa
          và lưu lại.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </div>
    );
  }
}

export default App;
