import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../components/Spinner';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner />
    }

    if (user?.uid && isAdmin) {
        return children;
    }

    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;