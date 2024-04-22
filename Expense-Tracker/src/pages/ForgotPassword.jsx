import React , {useRef} from 'react'
import { getAuth , sendPasswordResetEmail} from 'firebase/auth'
import firebaseApp from '../Firebase';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

function ForgotPassword() {

    const navigate = useNavigate()

    const emailRef = useRef("");

    const user = auth.currentUser;

    const passwordResetMailHandler = () => {
        const email = emailRef.current.value;
        
        if(email === ""){
            alert("Email is required")
        }else{
            sendPasswordResetEmail(user, email).then(resp =>{
                alert("Password reset email sent");
                console.log("Password reset email sent" , resp);
            }).catch(err => console.log(err.message))
    
            navigate('/loginscreen')
        }

    }
    const homeHandler = () => {
        navigate('/')
    }

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col text-center border-2 border-blue-400 w-1/2 mt-20 rounded-xl hover:border-white'>
            <input className='bg-stone-900 border border-white rounded-xl m-10 px-8 py-2 text-lg hover:border-blue-400 active:bg-neutral-950' ref={emailRef} type="password" placeholder='Enter new password' required />
            <button className='border text-blue-400 w-1/5 hover:border-blue-400 hover:text-white py-1.5 rounded-xl bg-black mb-4 mx-auto' onClick={passwordResetMailHandler}>Get Email</button>
        </div>
        <button className='mt-10 hover:underline hover:text-blue-500 text-xl' onClick={homeHandler}>Home Page</button>
    </div>
  )
}

export default ForgotPassword
