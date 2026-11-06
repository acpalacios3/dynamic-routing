// The context should provide:
// isAuthenticated: A boolean indicating the user’s login status.
// login(): A function to simulate logging in (sets isAuthenticated to true).
// logout(): A function to simulate logging out (sets isAuthenticated to false).


import { createContext, useState } from "react";

// create Context 
export const AuthContext = createContext();

// create Provider
export function AuthProvider({ children }) {

    // authentication status
    const [isAuthenticated, setisAuthenticated] = useState(false);
    
    // login function
    const login=() =>{
      setisAuthenticated(true);
    }
    // logout function
     const logout=() =>{
      setisAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}
