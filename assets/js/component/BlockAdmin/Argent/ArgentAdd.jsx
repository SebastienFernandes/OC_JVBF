import React from "react";

class ArgentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change() {
    this.props.changeRessources("argent", 50);
  }

  render() {
    return (
      <div id="ArgentAdd">
        <button className="setButton" onClick={this.change}> {"set argent +"} </button>
      </div>
    );
  }
}

export default ArgentAdd;