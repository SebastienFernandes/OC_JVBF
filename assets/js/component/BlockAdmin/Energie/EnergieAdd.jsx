import React from "react";

class EnergieAdd extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("energie", 10);
  }

  render() {
    return (
      <div id="EnergieAdd">
        <button className="setButton" onClick={this.change}> {"set energie +"} </button>
      </div>
    );
  }
}

export default EnergieAdd;