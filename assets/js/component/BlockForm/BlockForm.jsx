import React from "react";
import text from "../BlockText/Evenement.json";

class BlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 10};

    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formChange(event) {
  	const val = Number(event.target.value);
    this.setState({value: val});
  }

  formSubmit(event) {
    var tailleTableau = this.props.tableauText.length -1;
    var nb            = Math.floor(Math.random() * tailleTableau);
    console.log(tailleTableau);
    console.log(nb);
    this.props.changeEvenement(nb);
    this.props.changeTableau(nb);    

    const ressource = text.evenement[nb].ressource;
    const valeur    = text.evenement[nb].valeur;

    this.props.changeRessources(ressource, valeur);
    this.props.changeRessources("energie", this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} id='Form'>
        <label>
          Changer la valeur:
          <select value={this.state.value} onChange={this.formChange}>
            <option type="number" value= "10">{"+ 10"}</option>
            <option type="number" value= "20">{"+ 20"}</option>
            <option type="number" value= "30">{"+ 30"}</option>
            <option type="number" value= "-30">{"- 30"}</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BlockForm;