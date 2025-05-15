import './Displayitem.css'
import { useContext } from 'react'
import { MdAdd } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { StoreContext } from '../Context/StoreContext';


const Displayitem = ({id,name,price,image,description}) => {


const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className='food-item'>
<div className='food-item-img-container'>
    <img className='food-item-item-image' src={image} alt=''/>
    {!cartItems[id]
    ?<MdAdd onClick={()=>addToCart(id)} className='add' />
    :<div className='food-item-counter'>
    <IoAdd onClick={()=>addToCart(id)} className='img'/>
    <p>{cartItems[id]}</p>
    <IoIosRemoveCircleOutline onClick={()=>removeFromCart(id)} className='img' />
    </div>
    }
</div>
<div className='food-item-info'>
    <div className='food-item-name-rating'>
        <p>{name}</p>
        <img src='' alt=''/>
    </div>
    <p className='food-item-price'>kshs{price}</p>
   
</div>
    </div>
  )
}

export default Displayitem