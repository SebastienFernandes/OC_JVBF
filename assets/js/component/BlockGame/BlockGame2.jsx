import React from "react";
import Economie from './Economie.jsx';


class BlockGame2 extends React.Component {
  constructor(props) {
    super(props);
  }

mapEvent(){
  const events= this.props.tableauText.map(event => <div>{event.text}</div>);
  return events;
}

  render() {
    return (
      <div id='BlockGame2'>
        <div id="Eco">
          <Economie state={this.props.state} />
          <div id="Week"> {this.props.countWeek} </div>
          <div id="listEvent"> {this.mapEvent()} </div>
        </div>
      </div>
    );
  }
}

export default BlockGame2;