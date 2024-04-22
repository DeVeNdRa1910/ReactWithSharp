import React, {useRef} from 'react'
import { getAuth , updatePassword} from 'firebase/auth'
import firebaseApp from '../Firebase';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

function ResetPassword() {

    const newPasswordRef = useRef("");

    const user = auth.currentUser;

    const navigate = useNavigate()

    const newPasswordHandler = () => {
        const newPassword = newPasswordRef.current.value;
        
        updatePassword(user, newPassword).then(resp =>{
            console.log("Password updated" , resp);
        }).catch(err => console.erro(err))
    }
    const loginpageHandler = () => {
        navigate('/loginscreen')
    }

    return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col text-center border-2 border-blue-400 w-1/2 mt-20 rounded-xl hover:border-white'>
            <input className='bg-stone-900 border border-white rounded-xl m-10 px-8 py-2 text-lg hover:border-blue-400 active:bg-neutral-950' ref={newPasswordRef} type="password" placeholder='Enter new password' />
            <button className='border text-blue-400 w-1/5 hover:border-blue-400 hover:text-white py-1.5 rounded-xl bg-black mb-4 mx-auto' onClick={newPasswordHandler}>Set Password</button>
        </div>
        <button className='mt-10 hover:underline hover:text-blue-500 text-xl' onClick={loginpageHandler}>Home Page</button>
    </div>
    )
}

export default ResetPassword
