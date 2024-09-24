import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();
  const user = localStorage.getItem("user");
  if (user) {
    auth?.login();
    return;
  }
  if (!auth?.isAuthenticated) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
