import { createContext, useState, useContext, useEffect } from "react";
import AuthService from "../services/auth.service";

interface AuthProvideProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
    changeLoggedIn: ()=>{}
})

export const AuthProvider = ({children} : AuthProvideProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        changeLoggedIn();
    },[])

    function changeLoggedIn(){
        setIsAuthenticated(AuthService.isLoggued());
    }
        
    

    return <AuthContext.Provider value={{ isAuthenticated, changeLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
