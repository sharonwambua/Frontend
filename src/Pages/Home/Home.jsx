
import { useState } from 'react'
import './Home.css'
import Header from '../header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import CollectonDisplay from '../../Components/CollectionDisplay/CollectionDisplay'



const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <CollectonDisplay category={category}/>
    </div>
  )
}

export default Home