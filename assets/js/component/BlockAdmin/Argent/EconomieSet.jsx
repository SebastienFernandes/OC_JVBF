import React from "react";

class EconomieSet extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("argent", -50);
    this.props.changeRessources("economie", 50);
  }

  render() {
    return (
      <div id="EconomieSet">
        <button className="setButton" onClick={this.change}> {"set economie"} </button>
      </div>
    );
  }
}

export default EconomieSet;