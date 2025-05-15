import  { useContext } from 'react'
import './CollectionDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import Displayitem from '../Displayitem/Displayitem'

const CollectionDisplay = ({category}) => {

const {collection_list} = useContext(StoreContext)

  return (
    <div className='collection-display' id='collection-display'>
<h2>Our collection list</h2>
<div className='food-display-list'>
  {collection_list.map((item,index)=>{
    if(category==="All"|| category===item.category){

    return <Displayitem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
    }
  })}
</div>
    </div>
  )
}

export default CollectionDisplay