import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();

    if (!user) {
        // Redirect to login if no user
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
