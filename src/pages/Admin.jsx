import { useContext, useEffect, useState } from 'react'
import '../components/Header.css'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
import { myContent } from '../components/AllContent'
import { dailySpecial } from '../components/Data'

const Admin = () => {
    const navigate=useNavigate()
    const handlesubmit = (event)=>{
        switch (event.target.value) {
          case 'Starter':
            setTimeout(() => {
              navigate('/admin/starter')
            }, 1000);
            
            break;
    
          case 'Main':
            setTimeout(() => {
              navigate('/admin/main')
            }, 1000);
    
            break;
    
          case 'Dessert':
            setTimeout(() => {
              navigate('/admin/dessert')
            }, 1000);
    
            break;
        
          default:
            break;
        }
      }
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
            <div className='header'>
      <div className="header-img" >
        <img src="https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18.jpg" />
      </div>
      <main className="select-holder">
      <h3>Get Your Sweet And Refreshing meal </h3>
      {/* <main className='input-holder'>
      <input type="text" placeholder='what do you need'/>
      <CiSearch className='search-icon'/>
      </main> */}
      <select name="Catergories" id="item" onChange={handlesubmit}>
        <option value="Catergories" >Food Catergories</option>
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Dessert">Dessert</option>
      </select>
      </main>
      <div className="header-img" onClick={()=>{
        setTimeout(() => {
          navigate('/admin/logout')
        }, 1000);
      }}>
        <img src="https://wallpaperaccess.com/full/1312802.jpg" />
      </div>
    </div>
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
              navigate(`/admin/${starter}`)
            }, 2000)
          }}>
            <img src="https://nebula.wsimg.com/f743b2394a57403adbfdb3afd1a8bdcd?AccessKeyId=D5EE8C4E567E8C3E6623&disposition=0&alloworigin=1" alt="" />
          </div>
          <div className="main-menu-holder" onClick={()=>{
             setTimeout(() => {
              navigate(`/admin/${main}`)
            }, 2000)
          }}>
            <img src="https://dennys.co.nz/wp-content/uploads/2019/05/Main-Meals-Pg-1.jpg" alt="" />
          </div>
          <div className="dessert-holder" onClick={()=>{ setTimeout(() => {
        navigate(`/admin/${dessert}`)
      }, 2000)}}>
            <img src="https://blog.photoadking.com/wp-content/uploads/2023/04/1-2-1-663x1024.jpg" alt="" />
          </div>
        </div>
      </div>
    )
}

export default Admin
