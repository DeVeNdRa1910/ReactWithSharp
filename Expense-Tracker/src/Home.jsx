import React from 'react'
import firebaseApp from './Firebase.jsx'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import { useState, useEffect } from 'react'

const auth = getAuth(firebaseApp);

function Home() {

    const [user, setUser] = useState();

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
                    <div>
                        <button onClick={()=>{setHaveAccount(false)}}>Haven't Account? Create</button>
                    </div>
                </>
            )
        }else{
            return(
                <SignUp />
            )
        }
    }else{
        return (
            <>
                <div> Hello </div>
                {console.log(user)}
                <button onClick={()=>signOut(auth)}>Logout</button>
            </>
        )
    }
}

export default Home
