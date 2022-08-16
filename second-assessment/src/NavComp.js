import { NavLink } from "react-router-dom"
import './NavComp.css'
function NavComp() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BuyMyBooks.com</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="link" to='/products'>Products</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="link" to='/dashboard'>DashBoard</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="link" to='/'>Log-out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavComp