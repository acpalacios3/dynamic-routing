import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <div>
            <p>from login Page</p>
            <button
                className="auth-button"
                onClick={isAuthenticated ? logout : login}
            >

                {isAuthenticated ? "logout" : "login"}

            </button>

        </div>
    );
}