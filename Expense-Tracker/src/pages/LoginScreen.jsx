import React, { useState, useRef } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import firebaseApp from '../Firebase'
import { useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);



function LoginScreen() {

    const [visible, setVisible] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const nameRef = useRef("")
    const photoRef = useRef("")

    const navigate = useNavigate()

    const clickHandler = () => {
        setVisible(prev => !prev);
        setShowButton(false)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        }).then(resp => {
            console.log(resp);
            alert("Profile Updated successfully!!")
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }).catch(err=>{
            console.error(err);
        })
        navigate('/loginscreen')
        setShowButton(flase)
    }

  return (
    <div className='w-full top-0 py-4'>
        <nav className='flex justify-between px-8'>
            <h1 className='text-xl'>Welcome to the Expense Tracker!!!</h1>
            {showButton ? <h6 className='italic text-xl'>Your Profile is Incolmplete <button className='text-blue-600' onClick={clickHandler}>Complete Now</button> </h6> : <h6>!!!</h6>}
        </nav>
        
        {visible && 
            <div className='p-10'>
                <h2>Contect Details</h2>
                <div className='flex justify-center text-center border-2 border-white rounded-2xl w-4/5 mx-auto'>
                    <form className='w-full' onSubmit={submitHandler}>
                        <div className='flex justify-between w-full'>
                            <div className='flex flex-col mx-4 py-6 px-4 w-2/5'>
                                <label className='text-start text-lg font-bold pb-2' htmlFor="github">Full Name : </label>
                                <input className='px-8 py-1 rounded-xl border hover:border-white active:border-blue-600 bg-stone-900 text-white' placeholder='Enter your name' ref={nameRef} type="text" required />
                            </div>
                            <div className='flex flex-col mx-4 py-6 px-4 w-2/5'>
                                <label className='text-start text-lg font-bold pb-2' htmlFor="url">Profile Photo Url : </label>
                                <input className='px-8 py-1 rounded-xl border hover:border-white active:border-blue-600 bg-stone-900 text-white' placeholder='Enter your Photo Url' ref={photoRef} type="text" required/>
                            </div>
                        </div>
                        <div>
                            <button className='text-xl bg-black px-8 mb-4 py-1.5 rounded-lg border hover:border-blue-700' type='submit'> SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        }
    </div>
  )
}

export default LoginScreen
