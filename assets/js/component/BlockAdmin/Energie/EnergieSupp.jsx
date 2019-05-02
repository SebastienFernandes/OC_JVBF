import React from "react";

class EnergieSupp extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("energie", -10);
  }

  render() {
    return (
      <div id="EnergieSupp">
        <button className="setButton" onClick={this.change}> {"set energie -"} </button>
      </div>
    );
  }
}

export default EnergieSupp;