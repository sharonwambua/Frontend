import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, collection_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {collection_list.map((item,index) => {
          if (cartItems[item._id] > 0) 
          {
          return(
           <div key={index}>
           <div className="cart-items-title cart-items-item">
              <img src={item.image}/>
              <p>{item.name}</p>
              <p>Ksh{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>Ksh{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className="cross">X</p>
            </div>
            <hr/>
           </div> 
          ) 
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
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
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
