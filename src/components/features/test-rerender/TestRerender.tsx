import { useCallback, useMemo } from 'react';
import { TestRerenderChild } from './TestRerenderChild';

// import './TestRerender.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TestRerenderProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TestRerender(_props: TestRerenderProps) {
	const onClick = useCallback(() => {}, []);
	const value = useMemo(
		() => ({
			snum: '1',
		}),
		[]
	);

	console.log('[TestRerender] render');
	return (
		<div className='container'>
			<TestRerenderChild value={value} onClick={onClick} />
		</div>
	);
}
