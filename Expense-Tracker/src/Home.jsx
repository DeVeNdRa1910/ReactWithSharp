import React from 'react'
import firebaseApp from './Firebase.jsx'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import { useState, useEffect } from 'react'

const auth = getAuth(firebaseApp);

function Home() {

    const [user, setUser] = useState(null);

    const [haveAccount, setHaveAccount] = useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log("Hello" , user);
                setUser(user)
                // ...
            } else{
                // User is signed out
                // ...
                console.log("your logged out");
                setUser(null)
            }
        })
    } , [])

    if(user === null){
        if(haveAccount){
            return (
                <>
                    <SignIn/>
                    <div className='flex justify-center items-center py-8'>
                        <button className='text-2xl hover:text-blue-600' onClick={()=>{setHaveAccount(false)}}>Haven't Account? Create</button>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <SignUp />
                    <div className='flex justify-center items-center py-8'>
                        <button className='text-2xl hover:text-blue-600' onClick={()=>{setHaveAccount(true)}}>Login with existing Account</button>
                    </div>
                </>
            )
        }
    }else{
        return (
            <>
                <SignIn/>
                <div className='flex justify-center items-center py-8'>
                    <button className='text-2xl hover:text-blue-600' onClick={()=>{setHaveAccount(false)}}>Haven't Account? Create</button>
                </div>
            </>
        )
    }
}

export default Home
