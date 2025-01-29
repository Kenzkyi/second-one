import { useNavigate } from 'react-router-dom'
import './Logout.css'

const Logout = () => {
    const navigate = useNavigate()
  return (
    <div className='log-out'>
      <div className="log-out-sub-holder">
        <nav><img src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/logout-1024.png" alt="" /></nav>
        <h3>Oh no! You're leaving...</h3>
        <h3>Are you sure?</h3>
        <main>
            <button className='no-btn' onClick={()=>{
                setTimeout(() => {
                    navigate('/admin')
                }, 2000);
            }}>Nah, Just Kidding</button>
            <button className='yes-btn' onClick={()=>{
                setTimeout(() => {
                    navigate('/')
                },2000);
            }}>Yes, Log Me Out</button>
        </main>
      </div>
    </div>
  )
}

export default Logout
