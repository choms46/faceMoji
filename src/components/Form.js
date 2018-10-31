import React, { Component } from "react";
import Radio from "./Radio";
import Convert from "./Convert";
import "../form.css";

const smiles = ["̆̈", "̆̎", "̐̈", "̊̈", "̑̈", "̄̈", "̈", "̤̮", "̤̫", "̤̻", "̤͓"];

class Form extends Component {
  state = {
    type: 0,
    string: "",
    convstring: ""
  };
  handleRadioChange = e => {
    const value = this.state.string.replace(/\S/g, "$&" + smiles[e.target.id]);
    this.setState({
      type: parseInt(e.target.id),
      convstring: value
    });
  };

  handleConvertChange = e => {
    const value = e.target.value.replace(/\S/g, "$&" + smiles[this.state.type]);
    this.setState({
      string: e.target.value,
      convstring: value
    });
  };

  render() {
    let id = 0;
    const list = smiles.map(n => (
      <Radio
        onChange={this.handleRadioChange}
        type={this.state.type}
        name={n}
        key={id}
        id={id++}
      />
    ));

    return (
      <div id="form">
        <div class="container">
          <div class="radio-tile-group">{list}</div>
        </div>
        <Convert
          onChange={this.handleConvertChange}
          string={this.state.convstring}
        />
      </div>
    );
  }
}

export default Form;
