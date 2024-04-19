import React, { useContext, useRef } from 'react'
import AuthContext from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom'

function ProfileForm() {
    
    const navigate = useNavigate();

    const authCtx = useContext(AuthContext);

    const newPasswordRef = useRef("");

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredNewPassword = newPasswordRef.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBETpbpBV4z28LSqEj7-FJHqH_v312KyjI" , {
            method: 'POST',
            body: JSON.stringify({
                    idToken:authCtx.token,
                    password:enteredNewPassword,
                    returnSecureToken: false,
                }),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer abc'
            }
        }).then(resp => {
            //assume always suceeds
            navigate('/');
            return resp.json();
        }).then(data => {
            alert('Safalta purvak password update kiya gaya');
            console.log(data);
        })

    }

  return (
    <div>
      <form onSubmit={submitHandler} className='w-95p max-w-96 my-8 mx-auto'>
        <div className='mb-2'>
            <label className='font-bold mb-2 text-gray-800 block' htmlFor="new-password">New Password</label>
            <input ref={newPasswordRef} minLength={8} className='block text-inherit w-full border border-gray-900 rounded-md p-1 bg-white' type="password" id='new-password' />
        </div>
        <div className='mt-6'>
            <button className='cursor-pointer py-2 px-6 border border-blue-600 rounded-md text-white bg-gray-700 font-bold hover:text-gray-700 hover:bg-white'>Change Password</button>
        </div>
    </ form>
    </div>
  )
}

export default ProfileForm
