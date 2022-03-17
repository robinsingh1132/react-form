import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

    const location = useLocation();

    const signUp = async (e) => {
        e.preventDefault();
        if (name === '') {
			setNameError('Name is Required');
		}
        if (email === '') {
			setEmailError('Email is Required');
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError('Invalid email');
		}
		if (password === '') {
			setPasswordError('Password is Required');
		} else if (password.length < 8) {
			setPasswordError('Password must be 8 digit long');
		}

        if(name && email && password){
            let item = {name,email,password};
            let result = await fetch("http://127.0.0.1:8000/api/register",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                },
                body:JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem("user",JSON.stringify(result));
            location.push('/login');
        }
    }

  return (
    <>
    <div className='container my-5'>
		<div className='row justify-content-center'>
			<div className='col-sm-6'>
			    <div className='card'>
                    <h1 className='text-center'>Register Form</h1>
                    <form onSubmit={signUp} className='mx-3 my-3'>
                        <input type="text" name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'/>
                        {nameError ? <div className='text-danger'>{nameError}</div> : ''}
                        <br/>
                        <input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                        {emailError ? <div className='text-danger'>{emailError}</div> : ''}
                        <br/>
                        <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control'/>
                        {passwordError ? <div className='text-danger'>{passwordError}</div> : ''}
                        <br/>
                        <button className='btn btn-primary col-12'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register