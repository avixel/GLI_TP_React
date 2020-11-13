import * as React from 'react';
import {Route} from 'react-router-dom';

import Beer from './Beer';
import About from './About';

interface Props {}

interface State {
  beers: string[];
  newBeer: string;
  delBeer: number;
};

export default class BeerList extends React.Component<Props, State> {
  state: State = {
    beers: ["Maximator", "8.6"],
    newBeer: "",
    delBeer: 0,
  };

  addBeer = () => {
  	if(this.state.newBeer !== ""){
  		this.setState({
     	 beers: (this.state.beers).concat(this.state.newBeer),
    	});
  	}
  };

  updateNB = (evt) => {
  	this.setState({
      newBeer: evt.target.value,
    });
  };

  // erreur: supprime tout dans la liste sauf l'index qu'on passe (l'inverse de ce qu'on souhaite faire)
  remBeer = () => {
  	if(this.state.delBeer > -1){
  		this.setState({
     	 beers: (this.state.beers).splice(this.state.delBeer, 1),
    	});
  	}
  };

  updateRB = (evt) => {
  	this.setState({
      delBeer: evt.target.value,
    });
  };

  render () {
    return (
      <div>
      	<ul>
      		{this.state.beers.map((value) => {
      			return <Beer name={value} />
      		})}
        </ul>
        Ajouter une bière : 
        <input type="text" onChange={evt => this.updateNB(evt)}/>
        <button onClick={this.addBeer}>OK</button>
        <br />
        Supprimer une bière : 
        <input type="text" onChange={evt => this.updateRB(evt)}/>
        <button onClick={this.remBeer}>OK</button>
        <Route path='/about' component={About}/>
      </div>
    );
  }
}