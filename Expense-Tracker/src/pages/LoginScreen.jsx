import React, { useState, useRef } from 'react'
import { getAuth, updateProfile, sendEmailVerification , signOut} from 'firebase/auth'
import firebaseApp from '../Firebase'
import { useNavigate } from 'react-router-dom';
import Expenses from './Expenses';
import ExpenseList from './ExpenseList';

const auth = getAuth(firebaseApp);

function LoginScreen() {

    const [visible, setVisible] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const nameRef = useRef("")
    const photoRef = useRef("")

    const user = auth.currentUser;
    //const uid = user.uid;


/*     if (user !== null) {
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            console.log("  UID: " + profile.uid);

            // nameRef.current.value = profile.displayName
            // photoRef.current.value = profile.photoURL

        });
    } */

    console.log( "user inside login screen",user);

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
            // console.log(resp);
            alert("Profile Updated successfully!!")
            nameRef.current.value = "";
            passwordRef.current.value = "";
        }).catch(err=>{
            console.error(err);
        })
        navigate('/loginscreen')
        setShowButton(flase)
    }

    const verifyEmailHandler = () => {
        sendEmailVerification(auth.currentUser).then(resp => {
            alert("Email has bee sended");
        })
    }

    const logoutHandler = () =>{
        signOut(auth)
        navigate('/')
    }

    const resetPasswordHandler = () => {
        navigate('/resetpassword')
    }

  return (
    <div className='w-full top-0 py-4'>
        <nav className='flex justify-between px-8'>
            <h1 className='text-xl'>Welcome to the Expense Tracker!!!</h1>
            <button className='border border-white bg-black text-white py-1 px-4 rounded-xl' onClick={verifyEmailHandler}>Verify Email</button>
            <button className='border border-white bg-black text-white py-1 px-4 rounded-xl' onClick={resetPasswordHandler}>Reset Password</button>
            <button  className='bg-black px-4 py-1 rounded-xl border border-white hover:border-red-700' onClick={logoutHandler}>Logout</button>
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

        <Expenses />
        <ExpenseList />
    </div>
  )
}

export default LoginScreen
