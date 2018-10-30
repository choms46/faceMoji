import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Convert extends Component {
  
  state = {
    string: "",
    copied: false
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
          autocorrect="off"
          onChange={this.handleChange} 
        />
        
        <CopyToClipboard text={this.state.string} onCopy={() => alert("Copied!")}>
          <div id="result">{this.state.string}</div>
        </CopyToClipboard>
      </div>
    );
  }
}

export default Convert;
