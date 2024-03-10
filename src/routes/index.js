import { Navigate, Route } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "./error-pages";
import Registration from "../auth/Registration";
import CompanyList from "../pages/company/CompanyList";
import UserList from "../pages/users/UserList";
import CompanyAddContainer from "../pages/company/companyAddPage/CompanyAddContainer"

const isAuthenticated = () => {
  return localStorage.getItem('token') != null;
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
    path: '/',
    element: <ProtectedRoute />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/companies',
    element: <CompanyList />,
  },
  {
    path: '/users',
    element: <UserList />,
  },
  {
    path: "company/companyAddPage",
    element : <CompanyAddContainer />
  }
];
export default routes;

