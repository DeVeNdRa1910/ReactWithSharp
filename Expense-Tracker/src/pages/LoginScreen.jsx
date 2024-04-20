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
            {showButton ? <h6 className='italic text-xl'>Your Profile is Incolmplete <button className='text-blue-600' onClick={clickHandler}>Complete Now</button> </h6> : <h6>Your Profile is updated !!</h6>}
        </nav>
        
        {visible && <div>
            <div>
                <h2>Contect Details</h2>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="github">Full Name: </label>
                        <input ref={nameRef} type="text" required />
                    </div>
                    <div>
                        <label htmlFor="url">Profile Photo Url: </label>
                        <input ref={photoRef} type="text" required/>
                    </div>
                </div>
                <div>
                    <button type='submit'> SUBMIT</button>
                </div>
            </form>
            </div>
        }
    </div>
  )
}

export default LoginScreen
