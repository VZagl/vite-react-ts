import { Counter } from '@/components/counter/Counter';

import reactLogo from '@/assets/img/react.svg';
import './App.scss';
import viteLogo from '/vite.svg';

export const App = () => {
	return (
		<>
			<div>
				<a href='https://vite.dev' rel='noopener noreferrer' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a rel='noopener noreferrer' href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>

			<Counter />

			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>

			{/*  */}
			<div
				data-test2
				id='my-id'
				data-test3
				className='my-class'
				data-test='test'
			>
				<p>этот блок добавлен для тестирования сортировки атрибутов в JSX</p>
			</div>
			{/*  */}
		</>
	);
};
