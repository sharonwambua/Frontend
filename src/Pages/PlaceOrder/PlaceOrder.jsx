import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Components/Context/StoreContext'

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
   <form className='place-order'>
    <div className='place-order-left'>
<p className='title'>Deliver Information</p>
<div className='multi-fields'>
  <input type='text' placeholder='First name'/>
  <input type='text' placeholder='Last name'/>
</div>
<input type='email' placeholder='Email adress'/>
<input type='text' placeholder='Street'/>
<div className='multi-fields'>
  <input type='text' placeholder='City'/>
  <input type='text' placeholder='State'/>
</div>
<div className='multi-fields'>
  <input type='text' placeholder='Zip code'/>
  <input type='text' placeholder='Country'/>
</div>
<input type='text' placeholder='Phone'/>
    </div>
    <div className='place-order-right'></div>
    <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount()===0?0:200}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+200}</p>
            </div>
          </div>
          <button >PROCEED TO CHECKOUT</button>
        </div>
      
   </form>
  )
}

export default PlaceOrder