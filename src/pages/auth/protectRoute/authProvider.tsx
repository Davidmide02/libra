import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { UserType } from "../../../router";
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProvidedProps {
  children: ReactNode;
  user?: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const AuthProvider = ({ children, setUser }: AuthProvidedProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = localStorage.getItem("localuser");
    try {
      const localUser = getUser ? JSON.parse(getUser) : null;
      if (localUser) {
        setIsAuthenticated(true);
       
        console.log("local ser here", localUser);

        setUser(localUser);
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return;
    }
    setLoading(false);
  }, [setUser]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("localuser");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
