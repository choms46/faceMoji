import React, { Component } from "react";

class Convert extends Component {
  
  state = {
    string: ""
  };

  handleChange = (e) => {
    const { id } = this.props;
    const string = e.target.value.replace(/\S/g,"$&"+id);
    this.setState({
      [e.target.name]: string
    });
  };
  
  render() {
    return (
      <div id="convert">
        <input 
          id = "input"
          name="string"
          autocomplete="off"
          onChange={this.handleChange} 
        />

        <div id="result">{this.state.string}</div>
      </div>
    );
  }
}

export default Convert;
