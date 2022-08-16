import { useState } from "react";
import { NavLink } from 'react-router-dom';
import NavComp from "./NavComp";

function Signup(props) {

    const [userN, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);

    const handleChange = (e, key) => {
        if (key === 'username') {
            setUsername(e.target.value)
        }
        if (key === 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            Username<input type='text' onChange={(e) => handleChange(e, "username")}></input>
            Password<input type='text' onChange={(e) => handleChange(e, "password")}></input>
            <button  className="btn">
                
                <NavLink className='link' to='/signin' style={({ isActive }) => (
                    { color: isActive ? 'red' : 'blue' }
                )}>
                    Sign-up
                </NavLink>
            </button>
        </div>
    )
}
export default Signup