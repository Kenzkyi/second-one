import { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import { myContent } from '../components/AllContent'
import { useNavigate, useParams } from 'react-router-dom'

const AdminFoodItem = () => {
    const {starterObj,mainObj,dessertObj,obj,selectedItem,setObj,setStarterArr,setDessertArr,setMainArr} = useContext(myContent)
    const navigate = useNavigate()
    const {id} = useParams('id')
    const [listedItem, setListedItem] = useState([])
    const myObj = listedItem.find((item)=>item.id === obj.id)
    const [editting,setEditting] = useState(false)
    const [editValue,setEditValue] = useState(myObj?.price)
    // console.log(id)
    useEffect(()=>{
      setEditValue(myObj?.price)
    },[myObj])
    const handleEdit = (index)=>{
      if(id === starterObj.name){
              
      const mapped = starterObj.item.map((item)=>{
        if(item.id === index){
          item = {...item,price:editValue}
        }
        return item
      })
          setListedItem(mapped)
          setStarterArr(mapped)
          setEditting(false)
      }else if(id === mainObj.name){
              
      const mapped = listedItem.map((item)=>{
        if(item.id === index){
          item = {...item,price:editValue}
        }
        return item
      })
          setListedItem(mapped)
          setMainArr(mapped)
          setEditting(false)
      }else if(id === dessertObj.name){
              
      const mapped = listedItem.map((item)=>{
        if(item.id === index){
          item = {...item,price:editValue}
        }
        return item
      })
          setListedItem(mapped)
          setDessertArr(mapped)
          setEditting(false)
      }
    }
    useEffect(()=>{
      if (id === starterObj.name) {
        setListedItem(starterObj.item)
      }else if(id === mainObj.name ) {
        setListedItem(mainObj.item)
      }else if(id === dessertObj.name){
        setListedItem(dessertObj.item)
      }
    },[])
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
                navigate('/admin')
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
                    {editting?<div style={{display:'flex',height:'10vh',width:200,alignItems:'center'}}>
                      <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} style={{background:'transparent',padding:10,outline:'none',border:'none',fontSize:25,color:'#b3b306',width:130}} />
                      <button onClick={()=>handleEdit(obj.id)} style={{padding:10,height:'70%',background:'transparent',fontSize:16,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>save</button>
                      </div>:<div onClick={()=>setEditting(true)}><h6>{myObj?.price}</h6></div>}
                </nav>
            </main>
        </div>
      </div>
    </div>
  )
}

export default AdminFoodItem
