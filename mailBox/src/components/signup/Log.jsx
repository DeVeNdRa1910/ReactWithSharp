import React from 'react'
import { useRef } from 'react'
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth'
import firebaseApp from '../../FirebaseApp'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(firebaseApp)

function Log() {

    const navigate = useNavigate()

    const emailRef = useRef("")
    const passwordRef = useRef("")

    const signupHandler = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const resp = await signInWithEmailAndPassword(auth, email, password)
        console.log(resp);
        emailRef.current.value="";
        passwordRef.current.value="";

        console.log("User has successfully Logged In");

        navigate('/home')

    }

  return (
    <div className='flex justify-center items-center h-screen '>
      <div className=' w-[40%] p-10'>
            <h1 className='text-center mb-10 text-3xl font-bold'>Logged In</h1>
            <form onSubmit={signupHandler} className='flex flex-col w-full border border-white rounded-lg' >
                <input ref={emailRef} required className='bg-stone-800 pt-2 pb-4 px-4 mt-5 mx-5 outline-none border border-white rounded-lg' type="email" placeholder='Email'/>
                <input ref={passwordRef} required className='bg-stone-800 pt-2 pb-4 px-4 mt-5 mx-5 outline-none border border-white rounded-lg' type="test" placeholder='Password'/>
                <button className='w-[85%] py-2 my-5 border border-stone-800 mx-auto rounded-lg hover:bg-blue-600' type='submit' >Login</button>
                <a className='text-blue-500 text-xl text-center mb-5 hover:underline hover:text-blue-700' href="/forgot">Forgot Password</a>
            </form>
            <button onClick={()=>{navigate('/')}} className='w-full bg-stone-800 pt-2 pb-4 px-4 mt-5 text-xl outline-none border border-white rounded-lg'>Don't have any account? SignUp</button>
      </div>
    </div> 
  )
}

export default Log
