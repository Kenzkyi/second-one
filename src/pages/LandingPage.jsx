import { useContext, useEffect, useState } from 'react'
import Food from '../components/Food'
import Header from '../components/Header'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
import { myContent } from '../components/AllContent'

const LandingPage = () => {
  const navigate=useNavigate()
  const [first,second] = useState(false)
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
          {first?<img src="https://www.tonickitchen.ca/wp-content/uploads/2019/07/tonic_happyhourspecials_web_2-1200x1553.jpg" alt="" />:<img src='https://i.pinimg.com/originals/94/6f/67/946f67b80a603f2b0a053e88df7d0e7b.jpg'/>}
        </div>
        <div className="daily-special-two">
          <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/oT0tfWgum76lzdVqNese/media/75a327f7-ce25-4abf-b78d-8a6923e8cadb.jpeg" />
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
