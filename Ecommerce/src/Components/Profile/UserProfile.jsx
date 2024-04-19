import React from 'react'
import ProfileForm from './ProfileForm'
import Header from '../UI/Header'

function UserProfile() {
  return (
    <div>
        <Header/>
        <section className='my-12 mx-auto text-center'>
            <h1 className='text-5xl'>Your User Profile</h1>
            <ProfileForm />
        </section>
    </div>
  )
}

export default UserProfile
