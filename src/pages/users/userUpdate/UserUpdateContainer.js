import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../../services/apiRequest";
import UserUpdatePage from "./UserUpdatePage";
import Toast from "../../../component/Toast";
import Alert from '@mui/material/Alert';

const UserUpdateContainer = () => {
  const { idParamInContainer } = useParams();
  const [toast, setToast] = useState(null);
  const [emailError, setEmailError] = useState(false);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyId: "",
    isAdmin: false,
  });

  const [listRoles, setListRoles] = useState([]);

  const [listCompany, setListCompany] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch user data
      const userResult = await apiRequest({
        url: `user/${idParamInContainer}`,
        method: "GET",
      });

      if (userResult.status === 200) {
        setUser(userResult.data.result);
      }

      // Fetch company list
      const companyResult = await apiRequest({
        url: "companies",
        method: "GET",
      });

      if (companyResult.status === 200) {
        setListCompany(companyResult.data.result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const result = await apiRequest({
        url: "roles",
        method: "GET",
      });
      if (result.status === 200) {
        setListRoles(result.data.result);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du chargement des rôles.",
        error
      );
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      return (
        <Alert severity="error" color="warning">
          Erreur, vous avez pas entrée correctement les données
        </Alert>
      );
    }

    try {
      const result = await apiRequest({
        url: `user/${idParamInContainer}`,
        method: "PUT",
        data: user,
      });

      if (result.status === 200) {
        window.location.href = "/users";
        showToast("success", "User updated successfully");
        // Optionally redirect or show success message
      } else {
        showToast("error", "Error updating user:", result.error);
        // Optionally show error message
      }
    } catch (error) {
      showToast("error", "Error updating user:", error);
      // Optionally show error message
    }
  };

  const handleEmailChange = (e) => {
    handleChange(e);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={handleCloseToast}
        />
      )}
      <UserUpdatePage
        listCompany={listCompany}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={user}
        listRoles={listRoles}
        emailError={emailError}
        handleEmailChange={handleEmailChange}
      />
    </>
  );
};

export default UserUpdateContainer;
