import React from 'react'
import { useRef } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../Firebase'
import { useNavigate } from 'react-router-dom'

const auth = getAuth(firebaseApp)

function SignUp() {

    const navigate = useNavigate()

    const emailRef = useRef("")
    const passwordRef = useRef("")
    const cpasswordRef = useRef("")

    const clickHandler = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = cpasswordRef.current.value;

        if(confirmPassword === password){
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            console.log(resp);
            emailRef.current.value = "";
            passwordRef.current.value = "";
            cpasswordRef.current.value = "";
        } else {
            alert("Password and Confirm-Password must be same")
        }

        navigate('/')

    }

  return (
    <div className='flex justify-center items-center my-auto'>
        <div className='flex flex-col border border-white w-1/2 h-1/2 px-20 py-10 rounded-xl mt-20'>
            <div className='flex flex-col pb-8'>
                <label className='pb-1 text-xl' htmlFor="email">Email:</label>
                <input className='rounded-md px-8 p-1 bg-stone-800' ref={emailRef} type="text" placeholder='Enter your email' required/>
            </div>
            <div className='flex flex-col pb-8'>
                <label className='pb-1  text-xl' htmlFor="password">Password:</label>
                <input className='rounded-md px-8 p-1 bg-stone-800' ref={passwordRef} type="text" placeholder='Enter your password'/>
            </div>
            <div className='flex flex-col pb-8'>
                <label className='pb-1 text-xl' htmlFor="conforme Password">Confirm Password:</label>
                <input className='rounded-md px-8 p-1 bg-stone-800' ref={cpasswordRef} type="text" placeholder='Confirm Password'/>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-black w-1/4 px-8 py-2 rounded-lg border hover:border-blue-700' onClick={clickHandler}>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp
