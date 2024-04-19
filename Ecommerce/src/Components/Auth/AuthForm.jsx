import React, { useContext, useRef, useState } from 'react'
import AuthContext from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom'

function AuthForm() {

    const navigate = useNavigate();

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin(prev => !prev)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setLoading(true)

        if(isLogin){
            //fetch the user from db and match
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBETpbpBV4z28LSqEj7-FJHqH_v312KyjI" , {
                method: 'POST',
                body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                headers: {
                    'Content-Type' : 'application/json'
                    }
            }).then(resp => {
                setLoading(false);
                if(resp.ok){
                    return resp.json()
                } else {
                    return resp.json().then(data => {
                        console.log(data);
                        console.log("Authentication failed !!!");
                    })
                }
            }).then(data => {
                console.log(data);
                authCtx.login(data.idToken);
                navigate('/home');
            })
        } else {
            // create new user and post
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBETpbpBV4z28LSqEj7-FJHqH_v312KyjI", {
                method: 'POST',
                body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                headers: {
                    'Content-Type' : 'application/json'
                    }
            }).then(resp => {
                setLoading(false);
                if(resp.ok){
                    return resp.json()
                } else {
                    return resp.json().then(data => {
                        console.log(data);
                        console.log("Authentication failed !!!");
                    })
                }
            }).then(data => {
                console.log(data);
                //authCtx.login(data.idToken);
            })
        }
    }

  return (
    <section className='my12 mx-auto w-95p max-w-96 rounded-lg bg-slate-200 shadow-lg p-5 text-center'>
        <h1 className='text-center text-black text-4xl mb-4 font-bold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-2'>
                <label htmlFor="email" className='block text-black font-bold mb-2'>Your Email</label>
                <input ref={emailRef} className='text-inherit bg-white text-black border rounded-lg border-black w-full text-left p-1' type="email" id='email' required />
            </div >
            <div className='mb-2'>
                <label htmlFor="password" className='block text-black font-bold mb-2'>Your Password</label>
                <input ref={passwordRef} className='text-inherit bg-white text-black border rounded-lg border-black w-full text-left p-1' type="password" id='password' required />
            </div >
            <div className='mt-6 flex flex-col items-center'>
                {loading ? <p className='text-xl'>Sending Request...</p> : <button className='cursor-pointer text-white bg-gray-900 border border-white rounded-lg py-2 px-10 hover:bg-black hover:border-blue-600'>
                    {isLogin ? "Login" : "Create Account"}</button>
                }
                <button
                    type='button'
                    className='cursor-pointer text-black rounded-lg py-2 px-10 hover:text-blue-600'
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? "Create new account" : "Login with existing account"}
                </button>
            </div>
        </form>
    </section>
  )
}

export default AuthForm
