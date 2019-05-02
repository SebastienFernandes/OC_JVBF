import React from "react";


class Energie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="energie"> energie: {this.props.state.energie} </div>
    );
  }
}

export default Energie;