import React, { useState , useRef } from 'react'

function AuthForm() {

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const cpasswordRef = useRef("");

    const [isPasswordMatch, setIsPasswordMatch] = useState("true")


    const [isLogin, setIsLogin] = useState(true);

    const [loading, setLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin(prev => !prev)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enteredCpassword = cpasswordRef.current.value;
        
        if(enteredPassword === enteredCpassword){
            
            setIsPasswordMatch(true);

            setLoading(true);

            if(isLogin){
                // fetch the user from db and match
            }else{

                // create user and post

                fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAZ2nR6vMCbtELaNu1dtkSZnHeNlR9MAzM', {
                    method:'POST',
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
                        // ...
    
                    }else{
                        return resp.json().then(data => {
                            // show an error modal
                            let errorMessage = 'Authentication failed!'
                            if(data && data.error && data.error.message){
                                errorMessage = data.error.message;
                            }
                            alert(errorMessage)
                            console.log(data)
                        })
                    }
                    
                }).then()
            }
        }else{
            setIsPasswordMatch(false);
        }
    }

  return (
    <section className='my-12 mx-auto w-95p max-w-96 rounded-lg bg-purple-800 shadow-md p-4 text-center'>
        <h1 className='text-center text-white text-4xl mb-4 font-bold'>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
            <div className='mb-2'>
                <label className='block text-white font-bold mb-2' htmlFor="email">Your Email</label>
                <input ref={emailRef} className='text-inherit bg-white text-purple-950 border rounded-lg border-white w-full text-left p-1' type="email" id='email' required />
            </div>
            <div className='mb-2'>
                <label className='block text-white font-bold mb-2' htmlFor="password">Your Password</label>
                <input ref={passwordRef} className='text-inherit bg-white text-purple-950 border rounded-lg border-white w-full text-left p-1' type="password" id="password" required />
            </div>
            {!isLogin && <div className='mb-2'>
                <label className='block text-white font-bold mb-2' htmlFor="confirm-password">Confirm Password</label>
                <input ref={cpasswordRef} className='text-inherit bg-white text-purple-950 border rounded-lg border-white w-full text-left p-1' type="password" id="password" required />
            </div>}
            
            <div className='mt-6 flex flex-col items-center'>
            
                {!isPasswordMatch &&   <p className='text-red-600 text-xl'>Confirm password is not match with password</p>  }

                {loading ? <p className='text-white text-xl'>Sending request...</p> : <button   className='cursor-pointer  text-white bg-purple-600 border border-white rounded-lg py-2 px-10 hover:bg-purple-700 hover:border-purple-800'>
                    {isLogin ? 'Login' : 'Crete Account'}</button>
                }

                <button
                    type='button'
                    className='text-white cursor-pointer bg-purple-600  rounded-lg py-1 px-6 hover:bg-purple-800  mt-4 bg-transparent hover:text-purple-300 '
                    onClick={switchAuthModeHandler}
                >
                    {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
            </div>
        </form>
    </section>
  )
}

export default AuthForm