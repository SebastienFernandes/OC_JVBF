import "../css/app.css";

import React from 'react';
import ReactDOM from 'react-dom';

import BlockAdmin from './component/BlockAdmin/BlockAdmin.jsx';
import BlockGame from './component/BlockGame/BlockGame.jsx';
import BlockForm from './component/BlockForm/BlockForm.jsx';
import BlockText from './component/BlockText/Evenement.jsx';
import text from "./component/BlockText/Evenement.json";

const e = React.createElement;

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.changeRessources = this.changeRessources.bind(this);
    this.changeEvenement  = this.changeEvenement.bind(this);
    this.changeTableau    = this.changeTableau.bind(this);
    this.state = {
      ressources: {
        energie: 10,
        morale: 20,
        argent: 100,
        economie: 0,
      },
      tableauText: Object.create(text.evenement),
      curentText: "Liste evenements",
    };
  }

  changeTableau(nb) {
    this.setState((state) => {
      if(state.tableauText.length > 1){
        state.curentText = state.tableauText.splice(nb, 1);
        return state.curentText;
      }else{
        state.curentText = state.tableauText.splice(nb, 1);
        state.tableauText = Object.create(text.evenement);
        return state.tableauText;
      }
    });
  }

  changeEvenement(evenement) {
    this.setState((state) => {
      state.evenement = evenement;
      return state.evenement;
    });
  }

  changeRessources(ressource, value) {
    if (this.state.ressources.hasOwnProperty(ressource)){
      this.setState((state) => {
        state.ressources[ressource] += value;
        return state.ressources;
      });
    }
  }

  render() {
    return (
      <div>
        <div id='Game'>
          <BlockForm 
            changeRessources ={this.changeRessources} 
            changeEvenement  ={this.changeEvenement} 
            changeTableau    ={this.changeTableau}
            tableauText      ={this.state.tableauText}/>
          <BlockGame state ={this.state.ressources}/>
          <BlockText 
            evenement  ={this.state.evenement}
            curentText ={this.state.curentText}/>
        </div>
        <BlockAdmin changeRessources ={this.changeRessources}/>
      </div>
    );
  }
}

const domContainer = document.getElementById('home');
console.log(domContainer);
ReactDOM.render(e(Home), domContainer);