import { NavLink } from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <h1>Hello</h1>

            <button className="btn">
                <NavLink className='link' to='/signin' style={({ isActive }) => (
                    { color: isActive ? 'red' : 'blue' }
                )}>
                    Sign-in Page
                </NavLink>
            </button>
            <button className="btn">
                <NavLink className='link' to='/signup' style={({ isActive }) => (
                    { color: isActive ? 'red' : 'blue' }
                )}>
                    Sign-up Page
                </NavLink>
            </button>
        </div>
    )
}
export default HomePage