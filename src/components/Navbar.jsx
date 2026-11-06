import Login from "../pages/Login";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav>
            <Link to="login">Login test from Navbar</Link>
        </nav>

    );
}