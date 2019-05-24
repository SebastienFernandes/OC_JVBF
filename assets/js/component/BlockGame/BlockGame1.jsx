import React from "react";
import Energie from './Energie.jsx';
import Morale from './Morale.jsx';
import Argent from './Argent.jsx';


class BlockGame1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='BlockGame1'>
        <div id="Ressources">
          <Energie state={this.props.state} />
          <Morale state={this.props.state} />
          <Argent state={this.props.state} />
        </div>
      </div>
    );
  }
}

export default BlockGame1;