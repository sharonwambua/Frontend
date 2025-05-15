import React, { useContext, useState } from 'react'
import '../navbar/Navbar.css'
import Logo from '../Cart/logo.jpeg'
import { GrBasket } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Components/Context/StoreContext';


const Navbar = ({setShowLogin}) => {

const[menu,setMenu] = useState("home")

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
    <Link to='/'><img src={Logo} alt='logo' className='logo'/></Link>
    <ul className='navbar-menu'>
      <a href='#home' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</a>
      <a href='#explore-menu' onClick={()=>setMenu("collection")}  className={menu==="collection"?"active":""}>Collection</a>
      <a href='#footer' onClick={()=>setMenu("contact-us")}  className={menu==="contact-us"?"active":""}>Contact Us</a>
    
    </ul>
    <div className='navbar-right'>
   
      <div className='navbar-search-icon'>
      <Link to='/cart'><GrBasket /></Link>
      <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign in</button>
    </div>
    </div>
  )
}

export default Navbar