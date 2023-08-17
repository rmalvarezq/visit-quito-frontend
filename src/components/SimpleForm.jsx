import { useEffect, useState } from 'react';
import { Messaje } from './Messaje';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'marce',
		email: 'marce@gmail.com',
	});
	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
		console.log({ name, value });
	};

	useEffect(() => {
		console.log('useEffect Called!');
	}, []);

	useEffect(() => {
		console.log('formstate changed!');
	}, [formState]);

	useEffect(() => {
		console.log('email changed!');
	}, [email]);

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />
			<input
				type='text'
				className='form-control'
				name='username'
				value={username}
				onChange={onInputChange}
			/>
			<input
				type='email'
				className='form-control'
				placeholder='mrce@asda.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
			{
                username === 'marce2' && <Messaje />
            }
		</>
	);
};
