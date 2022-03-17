import React, { useState,useEffect } from 'react'
const Forgot = () => {
    const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState("");

    const forgotPassword = async(e) =>{
        e.preventDefault();
        if (email === '') {
			setEmailError('Email required');
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			setEmailError('Invalid email');
		}
        if(email){
            let item = {email};
            let result = await fetch("http://127.0.0.1:8000/api/password/email",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                },
                body:JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem("user",JSON.stringify(result));
            setEmailError(result.message);
        }
    }

    return (
        <>
            <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-6'>
                        <div className='card'>
                            <h1 className='text-center'>Forgot Password</h1>
                            <form className='mx-3 my-3' onSubmit={forgotPassword}>
							    <input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
                                {emailError ? <div className='text-danger'>{emailError}</div> : ''}
                                <br/>
                                <button className='btn btn-primary col-12'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot