import React from 'react';
import './SeasonDisplay.css';

const SeasonDisplay = (props) => {
	// an easier way to keep track of the season and icon to be used in our jsx based on the season after getSeason is called.
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

	//getSeason function takes two arguments lat & month to determine summer or winte.
	//We'll pass lat from props from app.js and call new Date().getMonth() when we call the getSeason function
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

	/*the i element in the jsx has semantic ui classes and icons which is why the classname is long.
     its following semanti-ui rules*/

	// we are using our own css file to position and color the icons and styling

	return (
		<div className={`season-display ${season}`}>
			<i className={` icon-left massive ${iconName} icon`} />
			<h1>{weather}</h1>
			<i className={` icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
