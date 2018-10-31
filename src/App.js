import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <Form />
        </body>
        <footer>
          <h5>변환된 글자를 클릭하시면 복사됩니다</h5>
        </footer>
      </div>
    );
  }
}

export default App;
