import React from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div>
      <Header />
      {!isAuth ? <Auth/> : <h1 className='text-3xl text-white'>User Not LoggedIn</h1>}
      <Counter />
    </div>
  )

}

export default App

