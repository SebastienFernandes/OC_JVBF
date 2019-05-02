import React from "react";


class Morale extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="morale"> morale: {this.props.state.morale} </div>
    );
  }
}

export default Morale;