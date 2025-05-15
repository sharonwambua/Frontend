import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
<div className='header-content'>
<h2>Brews, Books, and Blooms where Literature, Libations, and Nature Unite</h2>
<p>Choose from our diverse colections featuring books,flowers and even books</p>
<a href='#explore-menu' onClick={()=>setMenu("collection")} className='collection'>View our collections</a>
</div>
    </div>
  )
}

export default Header