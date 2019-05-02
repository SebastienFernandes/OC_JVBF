import React from "react";

class MoraleAdd extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("morale", 10);
  }

  render() {
    return (
      <div id="MoraleAdd">
        <button className="setButton" onClick={this.change}> {"set morale +"} </button>
      </div>
    );
  }
}

export default MoraleAdd;