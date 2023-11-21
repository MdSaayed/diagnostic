import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return;
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ form: location }} to={'/signin'} replace></Navigate>
};

export default Private;