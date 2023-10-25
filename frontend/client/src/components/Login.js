import { Link } from "react-router-dom";
import Feed from './Feed';
import Signup from './Signup'

function Login(){

    return (
        <>
        <form>
            <input></input>
        </form>
        <Link to='/feed'>
            <button>LOGIN</button>
        </Link>
        <Link to='/signup'>
            <button>Sign up</button>
        </Link>
        
        </>
    )
}

export default Login