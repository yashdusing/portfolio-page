import React, { Component } from 'react';
import './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
	    <div >
	        <div className ='f1 tc near-white'>
	        	<h1>{this.props.greet}</h1>
	        </div>
	        <div className = 'tc'>
		        <div className = 'tc bg-light-gray dib br3 pa3 ma3 grow bw2 shadow-5'>
					<Card/>
				</div>
			</div>
      	</div>
    );
  }
}

export default App;
