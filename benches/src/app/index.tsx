import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { Box } from '@payfit/midnight';
import { bench } from './bench';

const rows = new Array(100).fill(true);
const App = () => {
	return (
		<>
			{rows.map((element, index) => (
				<Box
					width={10}
					height={30}
					margin={1}
					backgroundColor="blue100"
					key={index}
				/>
			))}
		</>
	);
};
bench.start();
render(<App />, document.getElementById('root'));
bench.stop();
