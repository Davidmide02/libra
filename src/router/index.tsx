import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Material from "../pages/material";
import SingleMaterial from "../pages/material/singleMaterial";
import AdminMaterial from "../pages/admin/material";
import User from "../pages/admin/user";

const CustomRoute = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/material"
            element={<Suspense>{<Material />}</Suspense>}
          />
          <Route
            path="/adminmaterial"
            element={<Suspense>{<AdminMaterial />}</Suspense>}
          />
          <Route path="/User" element={<Suspense>{<User />}</Suspense>} />
          <Route
            path="/material/:single"
            element={<Suspense>{<SingleMaterial />}</Suspense>}
          />
        </Route>
        <Route index path="/" element={<Suspense>{<Home />}</Suspense>} />
        <Route path="/logout" element={<Suspense>{<Login />}</Suspense>} />
        <Route path="/register" element={<Suspense>{<Register />}</Suspense>} />
        <Route path="/login" element={<Suspense>{<Login />}</Suspense>} />
      </Routes>
    </div>
  );
};

export default CustomRoute;
