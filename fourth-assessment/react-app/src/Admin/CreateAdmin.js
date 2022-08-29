import { useState } from "react"
import axios from "axios"

const CreateAdmin = () => {

    const [fname,setFname]=useState('');
    const [useremail,setEmail]=useState('');
    const [userpassword,setPassword]=useState('');
    const [phone,setPhone]=useState('');

    const handleChange=(e,key)=>{
        if(key === 'fname') {
            setFname(e.target.value);
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
        if(key==='phone'){
            setPhone(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/createadmin',{
            "fname": fname,
            "email": useremail,
            "phone": phone,
            "password": userpassword
        },{withCredentials:true}).then((res)=>{
            console.log(res)
        }).catch((e)=>{
            console.log(e)
        });
    }


    return (
        <div>
            <h1>Create Admin</h1>
            Fname: <input type='text' onChange={(e) => handleChange(e, 'fname')}></input>
            Email:<input type='text' onChange={(e) => handleChange(e, 'email')}></input>
            Password:<input type='text' onChange={(e) => handleChange(e, 'password')}></input>
            Phone <input type='text' onChange={(e) => handleChange(e, 'phone')}></input>
            <button onClick={(e) => handleLogin(e)}>Sign up</button>
        </div>
    )
}
export default CreateAdmin;