import {Link} from 'react-router-dom'
import Login from './Login'
import Feed from './Feed'

function Signup() {
    return (
        <>
        <form className='signup-form'>
        <input typ='text' name='email' placeholder='Email'/>
        <input type='text' name='fname' placeholder='First Name'/>
        <input type='text' name='lname' placeholder='Last Name'/> 
        <input type='text' name='username' placeholder='Username'/>
        <input type='text' name='password' placeholder='Password'/>   
        </form>
        <Link to='/feed'>
        <button>Sign Up</button>
        </Link>

        <p>Have an account?</p><Link to='/login'>Log in</Link>

        </>
            
    )
}

export default Signup