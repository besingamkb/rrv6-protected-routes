import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
    return Cookies.get('authenticated')
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;