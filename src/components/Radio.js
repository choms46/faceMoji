import React, { Component } from "react";

class Radio extends Component { 

  render() {

    const { name, id, onChange, type } = this.props;
    const preview = "ㅡ"+name;
    return (
      <div class="input">
        <input
          id={id}
          class="radio-button"
          type="radio"
          name={id}
          onChange={onChange} 
          checked={type === id}
        />
        <div class="radio-tile">
          <div class="icon"/>
          <label for={id} class="radio-tile-label">
            {preview}
          </label>
        </div>
      </div>
    );
  }
}

export default Radio;
