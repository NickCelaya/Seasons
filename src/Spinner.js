import React from 'react';

const Spinner = (props) => {
	return (
		<div className='ui active dimmer'>
			<div className='ui text loader'>{props.message}</div>
		</div>
	);
};

//gets used if our props on our instance of Spinner in app.js stop working or change.
Spinner.defaultProps = {
	message: 'Loading...',
};

export default Spinner;
