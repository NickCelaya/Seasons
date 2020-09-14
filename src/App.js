import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './App.css';

class App extends Component {
	//State to be populated after componentDidMount runs and our setState methods are called and set new state.
	state = { latitude: null, errorMessage: '' };

	//getting lattitude when component mounts and putting it on state. If error occurs put on state as well.
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	//helper function that holds our conditionals on what to render here in app.js
	showContent = () => {
		//If we have an error render the error
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error:{this.state.errorMessage}</div>;
		}
		//if we have lattitude render SeasonDisplay component and pass lattitude as a prop to SeasonDisplay component
		if (!this.state.errorMessage && this.state.latitude) {
			return <SeasonDisplay lat={this.state.latitude} />;
		}
		// Shows spinner component as our conditional runs in order to render the error message or SeasonDisplay component
		return <Spinner message={'Please accept location request'} />;
	};

	render() {
		//invoking the showContent method. using helper methods can help keep our jsx clean.
		return <div>{this.showContent()}</div>;
	}
}
export default App;
