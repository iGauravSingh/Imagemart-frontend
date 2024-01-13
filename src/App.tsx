import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import CartContextProvider from './context/cartContext'
import './App.css'

function App() {
  
  const {fetchUser} = useAuth()

  useEffect(() => {
    fetchUser()
  },[])

  return (
    <div className=''>
      <CartContextProvider>
        <Outlet />
      </CartContextProvider>
      
    </div>
  )
}

export default App
