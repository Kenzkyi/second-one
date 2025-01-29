import { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const myEmail = 'groupThree@gmail.com'
    const myPassword = 'group123'
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = ()=>{
        if(email && password){
            if(myEmail === email && myPassword === password){
                setTimeout(() => {
                    alert("Login Successful \nWelcome Admin")
                }, 500);
                setTimeout(() => {
                    navigate('/admin')
                    // setEmail('')
                    // setPassword('')
                }, 2000);
            }else{
                setTimeout(() => {
                    alert('Incorrect E-mail/password')
                }, 500);
            }
        }
    }
  return (
    <div className='login'>
      <div className="login-holder">
        <div className='login-img-holder'>
            <img src="https://media.istockphoto.com/id/1446683895/photo/burger-and-pizza-meal.jpg?b=1&s=170667a&w=0&k=20&c=E0q6fT6Xw3BZgR0erAiGozHyfd1X0WWBjyhyAbYsi_U=" alt="" />
        </div>
        <nav>
            <div className="main-holder">
                <h3>Login</h3>
                <nav>
                    <div>
                        <p>Email</p>
                        <input type="text" placeholder='username@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    {/* <h6>Forgot Password?</h6> */}
                    <button onClick={handleLogin}>Sign in</button>
                </nav>
                {/* <footer>Don't have an account yet?<span>Register for free</span></footer> */}
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Login
