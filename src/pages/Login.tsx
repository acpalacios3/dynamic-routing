import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <div>
            <p>from login Page</p>

            {/* Login Page (/login):
            A simple page with a “Log In” button that calls the login() function from the context. */}
            <button
                className="auth-button"
                // onClick={isAuthenticated ? logout : login}
                onClick={login}
            >
                {/* {isAuthenticated ? "logout" : "login"} */}

                Log in

            </button>

        </div>
    );
}