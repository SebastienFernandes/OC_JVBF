import React from "react";


class Argent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="argent"> argent: {this.props.state.argent} </div>
    );
  }
}

export default Argent;