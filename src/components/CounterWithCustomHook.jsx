import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter, increment, reset, decrement } = useCounter(0);
	return (
		<>
			<h1> CounterWithCustomHook {counter}</h1>
			<button onClick={increment} className='bnt bnt-primary'>
				+1
			</button>
			<button onClick={reset} className='bnt bnt-primary'>
				reset
			</button>
			<button onClick={decrement} className='bnt bnt-primary'>
				-1
			</button>
		</>
	);
};
