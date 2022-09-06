// Routing
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="main-nav flex justify-around ">
            <NavLink className="main-nav-logo" to="/">
                <h1 className="text-green-500">HRnet</h1>
            </NavLink>
            <div>
                <NavLink to="/employee-list">Employee list</NavLink>
            </div>
        </nav>
    );
}

export default Header;
