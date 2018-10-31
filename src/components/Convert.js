import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Convert extends Component {

  render() {
    const { onChange, string } = this.props;

    return (
      <div id="convert">
        <input 
          id = "input"
          name="string"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          onChange={onChange}
        />
        <div id="result">
          <CopyToClipboard text={string} onCopy={() => alert("복사됐습니다")}>
            <h4>{string}</h4>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

export default Convert;
