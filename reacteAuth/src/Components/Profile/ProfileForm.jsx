import React, { useContext, useRef } from 'react'
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';


function ProfileForm() {

  const history = useHistory()

  const authCtx = useContext(AuthContext);

  const newPasswordInputRef = useRef('');
  
  const submitHandler = e => {
    e.preventDefault();
    
      const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZ2nR6vMCbtELaNu1dtkSZnHeNlR9MAzM', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer abc'
      }
    }).then(resp => {
        // assume always suucceeds
        return resp.json();
        history.replace('/')
    }).then(data => {
      alert('Safalta purvak password update kiya gaya');
      console.log(data);
    })
  }

  return (
    <form onSubmit={submitHandler} className='w-95p max-w-96 my-8 mx-auto'>
        <div className='mb-2'>
            <label className='font-bold mb-2 text-gray-800 block' htmlFor="new-password">New Password</label>
            <input ref={newPasswordInputRef} minLength={8} className='block text-inherit w-full border border-purple-950 rounded-md p-1 bg-white' type="password" id='new-password' />
        </div>
        <div className='mt-6'>
            <button className='cursor-pointer py-2 px-6 border border-purple-950 rounded-md text-white bg-purple-950 font-bold hover:text-purple-950 hover:bg-white'>Change Password</button>
        </div>
    </ form>
  );
}

export default ProfileForm