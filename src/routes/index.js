import { Navigate } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import ErrorPage from "./error-pages";
import CompanyAddContainer from "../pages/company/companyAddPage/CompanyAddContainer";
import UserAddContainer from "../pages/users/userAddPage/UserAddContainer";
import UserListContainer from "../pages/users/userList/UserListContainer";
import UserUpdateContainer from "../pages/users/userUpdate/UserUpdateContainer";
import CompanyUpdateContainer from "../pages/company/companyUpdatePage/CompanyUpdateContainer";
import CompanyListContainer from "../pages/company/companyListPage/CompanyListContainer";
import PasswordContainer from "../pages/changPassword/PasswordContainer";
import DocumentsByCompanyContainer from "../pages/documents/documentsByCompany/DocumentsByCompanyContainer";
import CompanySelectionContainer from "../pages/documents/selectionCompany/CompanySelectionContainer";

const isAuthenticated = () => {
  return localStorage.getItem("token") != null;
};
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const getUserFromLocalStorage = () => {
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
};

// Définition des routes
const routes = [
  {
    path: "/",
    element: <ProtectedRoute element={<Navigate to="/dashboard" replace />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute element={<Dashboard />} />,
  },
  {
    path: "/company/companyAddPage",
    element: <ProtectedRoute element={<CompanyAddContainer />} />,
  },
  {
    path: "/company/update/:idParamInContainer",
    element: <ProtectedRoute element={<CompanyUpdateContainer />} />,
  },
  {
    path: "/companies",
    element: <ProtectedRoute element={<CompanyListContainer />} />,
  },
  {
    path: "/user/add",
    element: <ProtectedRoute element={<UserAddContainer />} />,
  },
  {
    path: "/users",
    element: <ProtectedRoute element={<UserListContainer />} />,
  },
  {
    path: "/user/update/:idParamInContainer",
    element: <ProtectedRoute element={<UserUpdateContainer />} />,
  },
  {
    path: "/documents/:idParamInContainer",
    element: <ProtectedRoute element={<DocumentsByCompanyContainer />} />,
  },
  {
    path: "/company/documents/selection",
    element: <ProtectedRoute element={<CompanySelectionContainer />} />,
  },
  {
    path: "/user/changFirstPassword/:idUser",
    element: (
      <ProtectedRoute
        element={<PasswordContainer user={getUserFromLocalStorage()} />}
      />
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
