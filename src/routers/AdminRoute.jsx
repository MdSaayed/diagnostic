
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../components/hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return;
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={{ form: location }} to={'/signin'} replace></Navigate>
};

export default AdminRoute;