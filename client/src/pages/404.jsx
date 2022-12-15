import React from 'react';

import Layout from '../components/Layout/Layout';

import bgImage from '../images/NewWorkout/newWorkout-bg.png';

const Error404 = () => {
	return (
		<>
			<Layout bgImage={bgImage} title='Page not found' />
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	);
};

export default Error404;
