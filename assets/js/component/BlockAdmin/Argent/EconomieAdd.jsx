import React from "react";

class EconomieAdd extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("economie", 50);
  }

  render() {
    return (
      <div id="EconomieAdd">
        <button className="setButton" onClick={this.change}> {"set economie +"} </button>
      </div>
    );
  }
}

export default EconomieAdd;