import React from "react";


class Evenement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const curentText = this.props.curentText;
  	console.log(curentText);
    return (
        <div id='Event'> {curentText[0].text} </div>
    );
  }
}
export default Evenement;