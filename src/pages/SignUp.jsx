import { Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className="sign-up-holder">
        <div className="sign-up-second-holder">
            <header>
                <div></div>
                <h4>Sign Up</h4>
                <button>X</button>
            </header>
            <nav>
                <div>
                    <p>Enter Full Name</p>
                    <input type="text" placeholder='Full Name'/>
                </div>
                <div>
                    <p>Enter E-mail</p>
                    <input type="text" placeholder='E-mail'/>
                </div>
                <div>
                    <p>Create Password</p>
                    <input type="text" placeholder='Password'/>
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="text" placeholder='Confirm Password'/>
                </div>
                <button>Sign Up</button>
            </nav>
            <footer>
                {/* <Link></Link> */}
                <p>Already have an account? Sign in</p>
            </footer>
            
        </div>
      </div>
    </div>
  )
}

export default SignUp
