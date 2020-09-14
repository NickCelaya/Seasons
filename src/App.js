import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './App.css';

class App extends Component {
	state = { latitude: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	showContent = () => {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error:{this.state.message}</div>;
		}
		if (!this.state.errorMessage && this.state.latitude) {
			return <SeasonDisplay lat={this.state.latitude} />;
		}
		return <Spinner message={'Please accept location request'} />;
	};

	render() {
		return <div>{this.showContent()}</div>;
	}
}
export default App;
