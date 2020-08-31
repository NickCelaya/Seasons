import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { latitude: null, errorMessage: '' };
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ latitude: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>{this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.latitude) {
			return <div>{this.state.latitude}</div>;
		}

		return <div>Loading!</div>;
	}
}
export default App;
