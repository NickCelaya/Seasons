import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			position => console.log(position),
			err => console.log(err)
		);
		return <div>Latitude: 344344343434343 fake number</div>;
	}
}

export default App;
