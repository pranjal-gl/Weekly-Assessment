import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../useSlice";

const ManageUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.user.value);
    console.log(users);
    // let flag = false;
    // const [flag, setFlag] = useState(false);
    // if(users) {
    //     // flag = true;
    //     setFlag(true);
    // }
    
    return (
        
        <div>
            <h1>Manage Users</h1>
            {
                
            }
            <Link to='/create-admin'>Create new Admin</Link>
        </div>
    )
}
export default ManageUsers;