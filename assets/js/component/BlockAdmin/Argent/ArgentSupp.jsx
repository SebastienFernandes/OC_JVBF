import React from "react";

class ArgentSupp extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("argent", -50);
  }

  render() {
    return (
      <div id="ArgentSupp">
        <button className="setButton" onClick={this.change}> {"set argent -"} </button>
      </div>
    );
  }
}

export default ArgentSupp;