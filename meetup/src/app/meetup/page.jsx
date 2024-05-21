'use client'
import React from 'react'
import NewMeetupForm from '../../../components/meetups/NewMeetupForm'

function page() {
  
  // creating form for new meetup

  function addMeetupHandler(enteredMeetupData){
    console.log(enteredMeetupData);
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default page
