import React, { createContext, useState } from 'react'
import { dessertItem, mainItem, starterItem } from './Data'
import { useParams } from 'react-router-dom'

export const myContent = createContext()

const AllContent = ({children,id}) => {
    const [count,setCount] = useState(0)
    const [starterArr,setStarterArr] = useState(starterItem)
    const [mainArr,setMainArr] = useState(mainItem)
    const [dessertArr,setDessertArr] = useState(dessertItem)
    const [apiData,setApiData] = useState({})

    const starter = {name:'starter',
        item:starterArr
    }
    const main = {name:'main',
        item:mainArr
    }
    const dessert = {name:'dessert',
        item:dessertArr
    }
    const [obj,setObj] = useState({})
    const selectedItem = (index,array)=>{
      if (array.length === starter.item.length) {
          const starterObj = starter.item.find((item)=> item.id === index);
          setTimeout(() => {
            
            setObj(starterObj)
          }, 500);
        }else if(array.length === main.item.length) {
          const mainObj = main.item.find((item)=> item.id === index);
          setTimeout(() => {
            
            setObj(mainObj)
          }, 500);
            }else if(array.length === dessert.item.length){
              const dessertObj = dessert.item.find((item)=> item.id === index);
              setTimeout(() => {
                
                setObj(dessertObj)
              }, 500);
              
            }
    }
    fetch('https://restaurantmenu-s0f3.onrender.com/api/v1')
    .then((res)=>res.json())
    .then((res)=>setApiData(res))
    .catch((res)=>console.log(res))
  return (
    <myContent.Provider value={{count,starter:starter.name,main:main.name,dessert:dessert.name,starterObj:starter,mainObj:main,dessertObj:dessert,selectedItem,obj,setObj,setStarterArr,setMainArr,setDessertArr}}>
      {children}
    </myContent.Provider>
  )
}

export default AllContent
