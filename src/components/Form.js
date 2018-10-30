import React, { Component } from 'react';
import Radio from './Radio';
import Convert from './Convert';
import '../form.css';
class Form extends Component {
  state = {
    type : 0,
  }
  handleChange = (e) => {
    console.log(e.target.id)
    this.setState({
      type : e.target.id
    })
  }
  
  render() {
    let id = 0;
    const smiles = ['̆̈','̆̎','̐̈','̊̈','̑̈','̄̈','̈','̤̮','̤̫','̤̻','̤͓'];
    const list = smiles.map(
      n => (<Radio onChange={this.handleChange} name={n} key={id} id={id++} />)
    )

    return (
      <div id="form">
        <div class="container">
            <div class="radio-tile-group">
              {list}
            </div>
        </div>
        <Convert id={smiles[this.state.type]}/>
      </div>
    );
  }
}

export default Form;