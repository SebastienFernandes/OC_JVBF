import React from "react";
import Energie from './Energie.jsx';
import Morale from './Morale.jsx';
import Argent from './Argent.jsx';
import Economie from './Economie.jsx';


class BlockGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='BlockGame'>
        <div id="Ressources">
          <Energie state={this.props.state} />
          <Morale state={this.props.state} />
          <Argent state={this.props.state} />
        </div>
        <div id="Eco">
          <Economie state={this.props.state} />
        </div>
      </div>
    );
  }
}

export default BlockGame;