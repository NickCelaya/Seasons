import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(err) => console.log(err)
		);
		return <div>Latitude: </div>;
	}
}

export default App;
