import React from 'react';

const SeasonDisplay = props => {
	const getSeason = (lat, month) => {
		console.log(lat, month, 'nick');
		if (month > 2 && month < 9) {
			return lat > 0 ? 'summer' : 'winter';
		} else {
			return lat > 0 ? 'winter' : 'summer';
		}
	};

	const season = getSeason(props.lat, new Date().getMonth());

	console.log(season, 'celaya');
	return <div>{props.lat}</div>;
};

export default SeasonDisplay;
