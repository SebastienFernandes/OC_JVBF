import React from "react";


class Economie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="economie"> economie: {this.props.state.economie} </div>
    );
  }
}

export default Economie;