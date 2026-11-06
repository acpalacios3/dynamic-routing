import Login from "../pages/Login";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">

            {/* <Link to="login">Login test from Navbar</Link> */}
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>

            {isAuthenticated ? (
                <>
                    <Link to="/admin">Admin</Link>
                    <button onClick={logout}>
                        Log Out
                    </button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}

        </nav>

    );
}