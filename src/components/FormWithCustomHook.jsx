import { useEffect, useState } from 'react';
import { Messaje } from './Messaje';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
	const { formState, onInputChange, onResetForm, username, password, email } =
		useForm({
			username: '',
			email: '',
			password: '',
		});
	// const { username, email, password } = formState;

	return (
		<>
			<h1>SimpleForm</h1>
			<hr />
			<input
				type='text'
				className='form-control'
				name='username'
				placeholder='ingresa nombre'
				value={username}
				onChange={onInputChange}
			/>
			<input
				type='password'
				className='form-control'
				placeholder='ingresa contraseña'
				name='password'
				value={password}
				onChange={onInputChange}
			/>
			<input
				type='email'
				className='form-control'
				placeholder='ingresa email'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
			{username === 'marce2' && <Messaje />}
			<button onClick={onResetForm}>Borrar</button>
		</>
	);
};
