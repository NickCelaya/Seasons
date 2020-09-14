import React from 'react';

const Spinner = (props) => {
	return (
		<div className='ui active dimmer'>
			<div className='ui text loader'>{props.message}</div>
		</div>
	);
};

/*
default props are used to ensure the spinner will always have a message to display if the parent 
compenent forgets to pass props in for the message
here it gets used if our props on our instance of Spinner in app.js stop working or change.
*/
Spinner.defaultProps = {
	message: 'Loading...',
};

export default Spinner;
