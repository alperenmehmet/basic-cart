import React from 'react'
import {useGlobalContext} from './context.jsx'
import Navbar from './components/Navbar.jsx'
import CartContainer from './components/CartContainer.jsx'

const App = () => {
  const {loading} = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
