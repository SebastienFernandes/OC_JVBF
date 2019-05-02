import React from "react";
import EnergieAdd from './Energie/EnergieAdd.jsx';
import EnergieSupp from './Energie/EnergieSupp.jsx';
import MoraleAdd from './Morale/MoraleAdd.jsx';
import MoraleSupp from './Morale/MoraleSupp.jsx';
import ArgentAdd from './Argent/ArgentAdd.jsx';
import ArgentSupp from './Argent/ArgentSupp.jsx';
import EconomieAdd from './Argent/EconomieAdd.jsx';
import EconomieSupp from './Argent/EconomieSupp.jsx';
import EconomieSet from './Argent/EconomieSet.jsx';


class BlockAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.changeRessources = this.changeRessources.bind(this);
  }

  changeRessources(ressource, value, bool) {
    this.props.changeRessources(ressource, value, bool);
  }

  render() {
    return (
      <div id="BlockAdmin">
        <EnergieAdd changeRessources={this.changeRessources}/>
        <EnergieSupp changeRessources={this.changeRessources}/>
        <br/>
        <MoraleAdd changeRessources={this.changeRessources}/>
        <MoraleSupp changeRessources={this.changeRessources}/>
        <br/>
        <ArgentAdd changeRessources={this.changeRessources}/>
        <ArgentSupp changeRessources={this.changeRessources}/>
        <br/>
        <EconomieAdd changeRessources={this.changeRessources}/>
        <EconomieSupp changeRessources={this.changeRessources}/>
        <br/>
        <EconomieSet changeRessources={this.changeRessources}/>
      </div>
    );
  }
}

export default BlockAdmin;