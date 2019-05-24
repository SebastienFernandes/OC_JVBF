import React from "react";
import text from "../BlockText/Evenement.json";

class BlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  render() {
    return (
      <div>
        <label>
          Changer la valeur:
          <select value={this.state.value} onChange={this.formChange}>
            <option type="number" value= "10">{"+ 10"}</option>
            <option type="number" value= "20">{"+ 20"}</option>
            <option type="number" value= "30">{"+ 30"}</option>
            <option type="number" value= "-30">{"- 30"}</option>
          </select>
        </label>
      </div>
    );
  }
}

export default BlockForm;