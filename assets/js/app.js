import "../css/app.css";

import React from 'react';
import ReactDOM from 'react-dom';

import BlockAdmin from './component/BlockAdmin/BlockAdmin.jsx';
import BlockGame1 from './component/BlockGame/BlockGame1.jsx';
import BlockGame2 from './component/BlockGame/BlockGame2.jsx';
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
    this.changeCountWeek  = this.changeCountWeek.bind(this);
    this.formSubmit       = this.formSubmit.bind(this);
    this.state = {
      ressources: {
        energie:  10,
        morale:   20,
        argent:   100,
        economie: 0,
      },
      tableauText: Object.create(text.evenement),
      curentText:  "Liste evenements",
      countWeek:   1,
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

  changeCountWeek() {
    this.setState((state) => {
      state.countWeek = state.countWeek + 1;
      return state.countWeek;
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

  formSubmit(event) {
    var tailleTableau = this.state.tableauText.length;
    var nb            = Math.floor(Math.random() * tailleTableau);
    console.log(tailleTableau);
    this.changeEvenement(nb);
    this.changeTableau(nb);    

    const ressource = text.evenement[nb].ressource;
    const valeur    = text.evenement[nb].valeur;

    this.changeRessources(ressource, valeur);
    event.preventDefault();

    this.changeCountWeek();

    if (this.state.countWeek % 4 === 0) {
      return (
        <input type="button" value="Impots" onClick={this.formImpots}/>
        );
    }
  }

  formImpots() {
    console.log('IMPOTS!');
    this.changeRessources("argent", -1000);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} id='Form'>
          <div id='Game'>
            <BlockGame1 state ={this.state.ressources}/>
            <div id="InGame">
              <BlockForm 
                changeRessources ={this.changeRessources} 
                changeEvenement  ={this.changeEvenement} 
                changeTableau    ={this.changeTableau}
                tableauText      ={this.state.tableauText}
                countWeek        ={this.state.countWeek}
                changeCountWeek  ={this.state.changeCountWeek}/>
              <BlockText 
                evenement  ={this.state.evenement}
                curentText ={this.state.curentText}/>
            </div>
            <input type="submit" value="Submit" />
            <input type="button" value="Impots" onClick={this.formImpots}/>
            <BlockGame2
              state     ={this.state.ressources}
              countWeek ={this.state.countWeek}
              tableauText ={this.state.tableauText}/>
          </div>
          <BlockAdmin
            changeRessources ={this.changeRessources}/>
        </form>
      </div>
    );
  }
}

const domContainer = document.getElementById('home');
console.log(domContainer);
ReactDOM.render(e(Home), domContainer);