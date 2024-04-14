import { Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "./error-pages";
import Registration from "../auth/Registration";
import CompanyAddContainer from "../pages/company/companyAddPage/CompanyAddContainer";
import UserAddContainer from "../pages/users/userAddPage/UserAddContainer";
import UserListContainer from "../pages/users/userList/UserListContainer";
import UserUpdateContainer from "../pages/users/userUpdate/UserUpdateContainer";
import CompanyUpdateContainer from "../pages/company/companyUpdatePage/CompanyUpdateContainer";
import CompanyListContainer from "../pages/company/companyListPage/CompanyListContainer";

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
    path: "company/companyAddPage",
    element: <CompanyAddContainer />,
  },
  {
    path: "company/update/:idParamInContainer",
    element: <CompanyUpdateContainer />,
  },
  {
    path: "companies",
    element: <CompanyListContainer />,
  },
  {
    path: "user/add",
    element: <UserAddContainer />,
  },
  {
    path: "users",
    element: <UserListContainer />,
  },
  {
    path: "user/update/:idParamInContainer",
    element: <UserUpdateContainer />,
  },

];
export default routes;
