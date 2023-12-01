'use client';

import React, { useState } from 'react';
import Link from 'next/link';
const HomePage = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => setCounter(prev => prev + 1);
	const decrementCounter = () => setCounter(prev => prev - 1);

	return (
		<div>
			<button className='btn btn-primary' onClick={decrementCounter}>
				-
			</button>
			<span className='text-5xl font-bold mx-5'>{counter}</span>
			<button className='btn btn-primary' onClick={incrementCounter}>
				+
			</button>
		</div>
	);
};

export default HomePage;
