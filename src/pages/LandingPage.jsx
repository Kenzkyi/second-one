import { useContext, useDebugValue, useEffect, useState } from 'react'
import Food from '../components/Food'
import Header from '../components/Header'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
import { myContent } from '../components/AllContent'
import { dailySpecial } from '../components/Data'

const LandingPage = () => {
  const navigate=useNavigate()
  const [imgNum,setImgNum] = useState(0)
  useEffect(()=>{
    if(imgNum<7){
      setTimeout(() => {
        setImgNum(imgNum + 1)
      }, 5000);
    }else if(imgNum === 7){

      setImgNum(0)
    }
  },[imgNum])

  //  const  url='https://restaurantmenu-s0f3.onrender.com/api/v1/restaurant'
  //   fetch(url)
  //   .then((res)=>res.json())
  //   .then((res)=>console.log(res))
  //   .catch((res)=>console.log(res))

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     second(!first)
  //   },10000)
  // },[first])
  // setTimeout(()=>{
  //   second(false)
  // },20000)
  // setInterval(() => {
    
  // }, interval);
  const [param,setParam] = useState('')
  const {starter,main,dessert} = useContext(myContent)
  const foodItem = ()=>{
   ;
  }
  return (
    <div className='landing-page'>
      <Header/>
      <div className="landing-page-holder">
        <div className='daily-special'>
          <img src={dailySpecial[imgNum]} />
        </div>
      </div>
      <div className="category-holder">
      </div>
      <div className="items-holder">
        <div className="starter-holder" onClick={()=>{
           setTimeout(() => {
            navigate(`/${starter}`)
          }, 2000)
        }}>
          <img src="https://nebula.wsimg.com/f743b2394a57403adbfdb3afd1a8bdcd?AccessKeyId=D5EE8C4E567E8C3E6623&disposition=0&alloworigin=1" alt="" />
        </div>
        <div className="main-menu-holder" onClick={()=>{
           setTimeout(() => {
            navigate(`/${main}`)
          }, 2000)
        }}>
          <img src="https://dennys.co.nz/wp-content/uploads/2019/05/Main-Meals-Pg-1.jpg" alt="" />
        </div>
        <div className="dessert-holder" onClick={()=>{ setTimeout(() => {
      navigate(`/${dessert}`)
    }, 2000)}}>
          <img src="https://blog.photoadking.com/wp-content/uploads/2023/04/1-2-1-663x1024.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
