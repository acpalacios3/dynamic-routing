import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {login} = useContext(AuthContext);
    
    // "navigate" is a function that will allow us to change the path
    // kind of like the "to" prop in the Link component
    const navigate = useNavigate();

    const handleLogin = () => {
          login();
          navigate("/admin");
    };

    return (
        <div>
            <p>Login Page</p>

            {/* Login Page (/login):
            A simple page with a “Log In” button that calls the login() function from the context. */}
            <button
                className="auth-button"
                onClick={handleLogin}
            >
                Log in
            </button>

        </div>
    );
}