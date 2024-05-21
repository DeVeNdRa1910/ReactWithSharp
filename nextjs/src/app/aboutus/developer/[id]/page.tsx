import React from 'react'

function page({ params }:{ params: { id: String } }) {

  const routeId = Number(params.id);

  console.log(routeId);
  const details = [
      { id : 1, name: 'Yash', role: 'Senior Developer'},
      { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
      { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    ]

    const data = details.filter(item => item.id === routeId)

  return (
    <div>
      <h1>I am Devendra Vishwakarma on the developer paage</h1>
      {data.length > 0 ? ( // Check if data exists
        <>
          <h1>Name: {data[0].name}</h1>
          <h2>Role: {data[0].role}</h2>
        </>
      ) : (
        <>
          <h1>Developer doesn't exist</h1>
        </>
      )}
    </div>
  )
}

export default page
