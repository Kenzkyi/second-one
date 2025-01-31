import { useNavigate } from 'react-router-dom';
import './Header.css'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate()
  const handlesubmit = (event)=>{
    switch (event.target.value) {
      case 'Starter':
        setTimeout(() => {
          navigate('/starter')
        }, 1000);
        
        break;

      case 'Main':
        setTimeout(() => {
          navigate('/main')
        }, 1000);

        break;

      case 'Dessert':
        setTimeout(() => {
          navigate('/dessert')
        }, 1000);

        break;
    
      default:
        break;
    }
  }
  return (
    <div className='header'>
      <div className="header-img" onClick={()=>navigate('/login')}>
        <img src="https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18.jpg" />
      </div>
      <main className="select-holder">
      <h3>Welcome to Fancy Resturant </h3>
      {/* <main className='input-holder'>
      <input type="text" placeholder='what do you need'/>
      <CiSearch className='search-icon'/>
      </main> */}
      <select name="Catergories" id="item" onChange={handlesubmit}>
        <option value="Catergories" selected>Food Catergories</option>
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Dessert">Dessert</option>
      </select>
      </main>
      <div className="header-img">
        <img src="https://wallpaperaccess.com/full/1312802.jpg" />
      </div>
    </div>
  )
}

export default Header
