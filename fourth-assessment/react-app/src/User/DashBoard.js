import { Link } from 'react-router-dom';
const DashBoard = (props) => {
    return(
        <div>
            <h1>DashBoard</h1>

            <Link to='/setting'>Settings</Link>
        </div>
    )
}
export default DashBoard;