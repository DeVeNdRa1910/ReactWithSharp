'use client'
import React from 'react'
import NewMeetupForm from '../../../components/meetups/NewMeetupForm'
import { Calistoga } from 'next/font/google'

function page() {
  
  // creating form for new meetup

/*   function addMeetupHandler(enteredMeetupData){
    console.log(enteredMeetupData);
  } */

  async function addMeetupHandler(enteredMeetupData){
    const resp = await fetch('/api/newmeetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json()

    console.log(data);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default page
