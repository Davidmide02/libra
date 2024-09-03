import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const CustomRoute = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/logout" element={<Suspense>{<Home />}</Suspense>} />

        <Route path="/login" element={<Suspense>{<Login />}</Suspense>} />
        <Route path="/register" element={<Suspense>{<Register />}</Suspense>} />
        <Route
          path="/"
          element={
            <Layout>
              <Suspense>{<Home />}</Suspense>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default CustomRoute;
