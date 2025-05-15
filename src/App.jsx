
import { useState } from 'react'
import './App.css'
import Footer from './Pages/Footer/Footer'
import Navbar from './Pages/navbar/Navbar'
import Home from './Pages/Home/Home'
import Login from './Pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'

function App() {
  
const [showLogin,setshowLogin] = useState(false)

  return (
    <>
{showLogin?<Login setShowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setshowLogin}/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
<Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Home/>
    </div>
    <Footer/>
    </>
  )
}

export default App
