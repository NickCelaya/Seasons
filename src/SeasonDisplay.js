import React from 'react';

const SeasonDisplay = (props) => {
	const seasonConfig = {
		summer: {
			weather: "Let's hit the beach",
			iconName: 'sun',
		},
		winter: {
			weather: "Burr it's chilly",
			iconName: 'snowflake',
		},
	};

	//getSeason function takes two arguments lat & month to determine summer or winter
	const getSeason = (lat, month) => {
		if (month > 2 && month < 9) {
			return lat > 0 ? 'summer' : 'winter';
		} else {
			return lat > 0 ? 'winter' : 'summer';
		}
	};

	//assigning getSeason function to to season varible, and passing in it's two arguments lat & month
	const season = getSeason(props.lat, new Date().getMonth());

	/* Destructoring keys off of seasonConfig pointed at the season variable 
       based on the season once getSeason is called the keys will render and show the seasonal information */
	const { weather, iconName } = seasonConfig[season];

	return (
		<div>
			<i className={`${iconName} icon`} />
			<h1>{weather}</h1>
			<i className={`${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
