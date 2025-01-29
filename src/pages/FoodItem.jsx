import { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import { myContent } from '../components/AllContent'
import { useNavigate, useParams } from 'react-router-dom'
import { starterItem } from '../components/Data'

const FoodItem = () => {
    const {starterObj,mainObj,dessertObj,obj,selectedItem,setObj} = useContext(myContent)
    const navigate = useNavigate()
    const {id} = useParams('id')
    const [listedItem, setListedItem] = useState([])

    useEffect(()=>{
      if (id === starterObj.name) {
        setListedItem(starterObj.item)
      }else if(id === mainObj.name ) {
        setListedItem(mainObj.item)
      }else if(id === dessertObj.name){
        setListedItem(dessertObj.item)
      }
    },[id])
  return (
    <div className='food-item'>
      <div className="left-menu-details">
      <h4>{id}</h4>
            <nav>
      {listedItem.map((item,index,array)=>
        <main key={item.id} onClick={()=>selectedItem(item.id,array)}>
            <p>{item.name}</p>
        </main>
    )}
      </nav>
      </div>
      
      <div className="right-menu-details">
        <button className='btn' onClick={()=> {
            setTimeout(() => {
                navigate('/')
                setObj({})
            }, 1000);
        }}>X</button>
        <div className="right-menu-main-holder">
            <main>
                <div style={{display:obj.img ?'flex':'none'}}>
                    <img src={obj.img} />
                </div>
                <nav>
                    <h5>{obj.name}</h5>
                    <p>{obj.description}</p>
                    <h6>{obj.price}</h6>
                </nav>
            </main>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
