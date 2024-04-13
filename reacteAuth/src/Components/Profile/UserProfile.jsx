import React from 'react'
import ProfileForm from './ProfileForm'

function UserProfile() {
  return (
    <section className='my-12 mx-auto text-center'>
        <h1 className='text-5xl'>Your User Profile</h1>
        <ProfileForm />
    </section>
  )
}

export default UserProfile