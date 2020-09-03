import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import './App.css';

class App extends Component {
	state = { latitude: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ latitude: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <SeasonDisplay err={this.state.err} />;
		}
		if (!this.state.errorMessage && this.state.latitude) {
			return <SeasonDisplay lat={this.state.latitude} />;
		}

		return <div>Loading!</div>;
	}
}
export default App;
