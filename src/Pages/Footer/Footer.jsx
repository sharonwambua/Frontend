import React from 'react'
import './Footer.css'
import logo from '../Cart/logo.jpeg'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
<div className='footer-content-left'>
<img src={logo} alt=''/>
<p></p>
<div className='footer-social-icons'>
<FaInstagram className='img' />
<FaLinkedinIn className='img'/>
<FaXTwitter className='img' />
</div>
</div>
<div className='footer-content-centre'>
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
</div>
<div className='footer-content-right'>
<h2>GET IN TOUCH</h2>
<ul>
    <li>+254708528617</li>
    <li>sharonwambua06@gmail.com</li>
</ul>
</div>
    </div>
    <hr/>
    <p className='footer-copyright'>copyright 2024 Brews, Books, and Blooms -All Rights Reserved </p>
    </div>
  )
}

export default Footer