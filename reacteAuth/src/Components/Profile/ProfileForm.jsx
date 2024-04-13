import React from 'react'

function ProfileForm() {
  return (
    <form className='w-95p max-w-96 my-8 mx-auto'>
        <div className='mb-2'>
            <label className='font-bold mb-2 text-gray-800 block' htmlFor="new-password">New Password</label>
            <input className='block text-inherit w-full border border-purple-950 rounded-md p-1 bg-white' type="password" id='new-password' />
        </div>
        <div className='mt-6'>
            <button className='cursor-pointer py-2 px-6 border border-purple-950 rounded-md text-white bg-purple-950 font-bold hover:text-purple-950 hover:bg-white'>Change Password</button>
        </div>
    </ form>
  );
}

export default ProfileForm