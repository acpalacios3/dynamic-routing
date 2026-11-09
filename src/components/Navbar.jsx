// import Login from "../pages/Login";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">

            {/* <Link to="login">Login test from Navbar</Link> */}
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>

            {/* Use the context to: If the user is authenticated, display the "Admin link" and "Log Out" button,
            otherwise, display the "Log In" link */}
            {isAuthenticated ? (
                <>
                    <Link to="/admin">Admin</Link>
                    <button onClick={logout}>
                        Log Out
                    </button>
                </>
            ) : (<Link to="/login">Log In</Link>)
            
            }

        </nav>

    );
}