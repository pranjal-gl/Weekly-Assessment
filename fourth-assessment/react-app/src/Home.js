import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <Link to='/user-login'>User Login</Link>
            <br/>
            <Link to="/admin-login">Admin Login</Link>
        </div>
    )
}
export default Home;