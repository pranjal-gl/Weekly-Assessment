import { useState } from "react";
import { NavLink } from 'react-router-dom';
import NavComp from "./NavComp";

function Signin(props) {
    const [userN, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(false);

    const handleChange = (e, key) => {
        
        if (key === 'username') {
            setUsername(e.target.value)
        }
        if (key === 'password') {
            setPassword(e.target.value)
            console.log(e.target.value);
        }
        console.log("before auth");
        authLogin(e.target.value);
    }

    const authLogin = (val) => {
        if (val == 'admin') {
            setFlag(true);
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            Username<input type='text' onBlur={(e) => handleChange(e, "username")}></input>
            Password<input type='text' onBlur={(e) => handleChange(e, "password")}></input>

            {/* only visible when the password value will be admin */}
            <button  className="btn">
                {
                    flag ? <NavLink className='link' to='/dashboard' style={({ isActive }) => (
                        { color: isActive ? 'red' : 'blue' }
                    )}>
                        Sign-in
                    </NavLink> : ""
                }
                
            </button>
            <br/>
            <p>Enter valid password to show signin button</p>
        </div>
    )
}
export default Signin