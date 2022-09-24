// Routing
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="main-nav flex justify-around p-4">
            <NavLink
                className="main-nav-logo"
                to="/"
                style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    textDecorationColor: isActive ? 'rgb(34 197 94)' : 'none',
                })}
            >
                <h1 className="text-green-500 hover:opacity-60 active:opacity-40">
                    HRnet
                </h1>
            </NavLink>
            <div>
                <NavLink
                    className="hover:opacity-60 active:opacity-40"
                    to="/employee-list"
                    style={({ isActive }) => ({
                        textDecoration: isActive ? 'underline' : 'none',
                    })}
                >
                    Employee list
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;
