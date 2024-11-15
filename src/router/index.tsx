import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import SingleMaterial from "../pages/material/singleMaterial";
import AdminMaterial from "../pages/admin/material";
import User from "../pages/admin/user";
import { AuthProvider } from "../pages/auth/protectRoute/authProvider";
import ProtectedRoute from "../pages/auth/protectRoute/protectedRoute";
import Material from "../pages/material";
import Dashboard from "../pages/admin/dashboard";

export type UserType = {
  message: string;
  username?: string;
  email: string;
  role: string;
  token: string;
};
const CustomRoute = () => {
  const [user, setUser] = useState<UserType | null>(null);
  console.log("user route here", user);

  return (
    <AuthProvider user={user} setUser={setUser}>
      <div className="w-full h-full">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout user={user} />
              </ProtectedRoute>
            }
            errorElement={<p>Error Occured...Ooop!</p>}
          >
            <Route
              path="/material"
              element={<Suspense>{<Material />}</Suspense>}
            />
            <Route
              path="/material/:id"
              element={<Suspense>{<SingleMaterial />}</Suspense>}
            />

            <Route
              path="/adminmaterial"
              element={<Suspense>{<AdminMaterial />}</Suspense>}
            />
            <Route
              path="/dashboard"
              element={<Suspense>{<Dashboard />}</Suspense>}
            />
            <Route path="/User" element={<Suspense>{<User />}</Suspense>} />
          </Route>
          {/* protected end here */}
          <Route index path="/" element={<Suspense>{<Home />}</Suspense>} />
          <Route
            path="/logout"
            element={<Suspense>{<Login setUser={setUser} />}</Suspense>}
          />
          <Route
            path="/register"
            element={<Suspense>{<Register setUser={setUser} />}</Suspense>}
          />
          <Route
            path="/login"
            element={<Suspense>{<Login setUser={setUser} />}</Suspense>}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default CustomRoute;
