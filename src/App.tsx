
import { Outlet } from 'react-router-dom'
import './App.css'
import CartContextProvider from './context/cartContext'


function App() {


  return (
    <div className=''>
      <CartContextProvider>
        <Outlet />
      </CartContextProvider>
      
    </div>
  )
}

export default App
