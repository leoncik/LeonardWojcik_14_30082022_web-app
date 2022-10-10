// Routing
import { NavLink } from 'react-router-dom';

// Assets
import logo from '../../../assets/WealthHealth-logo.jpg';

function Header() {
    return (
        <nav className="main-nav flex items-center justify-around p-4 bg-white">
            <NavLink
                className="main-nav-logo flex items-center gap-4"
                to="/"
                style={({ isActive }) => ({
                    textDecoration: isActive ? 'underline' : 'none',
                    textDecorationColor: isActive ? '#93ad18' : 'none',
                })}
            >
                <img className="w-8 peer" src={logo} alt="HRnet logo." />
                <h1 className="text-[#93ad18] hover:opacity-60 active:opacity-40 h-fit peer-hover:opacity-60 peer-active:opacity-40">
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
