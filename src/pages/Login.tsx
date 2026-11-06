import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const { isAuthenticated, login, logout} = useContext(AuthContext);
      
    return (
        <div>

            <button 
                 onClick={isAuthenticated ? logout:login}>
                {isAuthenticated ? logout:login}
            </button>
           
        </div>
    );
}