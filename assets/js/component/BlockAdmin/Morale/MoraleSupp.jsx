import React from "react";

class MoraleSupp extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("morale", -10);
  }

  render() {
    return (
      <div id="MoraleSupp">
        <button className="setButton" onClick={this.change}> {"set morale -"} </button>
      </div>
    );
  }
}

export default MoraleSupp;