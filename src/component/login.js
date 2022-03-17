import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");


	const login = async (e) => {
		e.preventDefault();
		if (email === '') {
			setEmailError('Email required');
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError('Invalid email');
		}
		if (password === '') {
			setPasswordError('Password required');
		} else if (password.length < 8) {
			setPasswordError('Password must be 8 digit long');
		}

		if (email && password) {
			let item = { email, password };
			let result = await fetch("http://127.0.0.1:8000/api/login", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
				},
				body: JSON.stringify(item)
			});
			result = await result.json();
			
			localStorage.setItem("user", JSON.stringify(result));
			setError(result.message);
			setSuccess(result.success)
			setEmailError('');
			setPasswordError('');
		}
	}

	return (
		<>
			<div className='container my-5'>
				<div className='row justify-content-center'>
					<div className='col-sm-6'>
					<div className='card'>
						<h1 className='text-center'>Login Form</h1>
						<form className='mx-3 my-3'>
						{success ? <div className='text-success text-center'>{success}</div> : <div className='text-danger text-center'>{error}</div>}
							<input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
							{emailError ? <div className='text-danger'>{emailError}</div> : ''}
							<br />
							<input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
							{passwordError ? <div className='text-danger'>{passwordError}</div> : ''}
							<br />
							<button onClick={login} className='btn btn-primary col-12'>Sign Up</button>
							<NavLink to="/forgot">Forgot Password</NavLink>

						</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Login;
