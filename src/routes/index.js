import { Navigate, Route } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "./error-pages";
import Registration from "../auth/Registration";
import CompanyList from "../pages/company/CompanyList";
import CompanyAddContainer from "../pages/company/companyAddPage/CompanyAddContainer";
import UserAddContainer from "../pages/users/userAddPage/UserAddContainer";
import UserListContainer from "../pages/users/userList/UserListContainer";

const isAuthenticated = () => {
  return localStorage.getItem("token") != null;
};
const ProtectedRoute = () => {
  return isAuthenticated() ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

// Définition des routes
const routes = [
  {
    path: "/",
    element: <ProtectedRoute />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/companies",
    element: <CompanyList />,
  },
  {
    path: "company/companyAddPage",
    element: <CompanyAddContainer />,
  },
  {
    path: "user/add",
    element: <UserAddContainer />,
  },
  {
    path: "users",
    element: <UserListContainer />,
  },
];
export default routes;
