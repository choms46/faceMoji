import React, { Component } from "react";

class Radio extends Component { 
  
  render() {
    const { name, id, onChange } = this.props;
    const preview="ㅡ"+name;
    return (
      <div class="input">
        <input
          id={id}
          class="radio-button"
          type="radio"
          name="{id}"
          onChange={onChange} 
        />
        <div class="radio-tile">
          <div class="icon"/>
          <label for="{id}" class="radio-tile-label" checked>
            {preview}
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
