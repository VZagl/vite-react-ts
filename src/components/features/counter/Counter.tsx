import { useState } from 'react';

import './Counter.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className='counter'>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
			<p>
				Edit <code>src/components/features/counter/Counter.tsx</code> and save
				to test HMR
			</p>
		</div>
	);
};
