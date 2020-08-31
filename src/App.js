import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { latitude: '' };

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ latitude: position.coords.latitude }),
			err => console.log(err)
		);
	}

	render() {
		return <div>You are at Latitude: {this.state.latitude}</div>;
	}
}
export default App;
