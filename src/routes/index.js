import { Navigate, Route } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "./error-pages";

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
      element: <ProtectedRoute/>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
        path: '*',
        element: <ErrorPage />,
      },
  ];
  export default routes;
  
