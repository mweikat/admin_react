import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../auth/authProvider";

function ProtectedRoutes(){

    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/auth/login"></Navigate>

}

export default ProtectedRoutes;