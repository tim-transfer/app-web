import React, { useState, useEffect } from "react";
import apiRequest from "../../../services/apiRequest";
import UserAddPage from "./UserAddPage";

const UserAddContainer = () => {
  const [listCompany, setListCompany] = useState([]); // Utilisation de useState pour stocker la liste des entreprises

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyId: "",
    email: "",
    idRole: 2, //Par défault, l'identifiant du rôle sera de 2 qui correspond au rôle utilisateur.
  });

  const [listRoles, setListRoles] = useState([]);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await apiRequest({
        url: "companies",
        method: "GET",
      });
      if (result.status === 200) {
        setListCompany(result.data.result); // Mettre à jour listCompany avec les données de l'API
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du chargement des entreprises:",
        error
      );
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let userToSend = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.tempPassword,
        companyId: formData.companyId,
        email: formData.email,
        idRole: formData.idRole,
      };

      const result = await apiRequest({
        url: "/auth/register",
        method: "PUT",
        data: userToSend,
      });

      if (result.status == 200) {
        window.location.href = "/users";
      } else if (result.status == 400) {
        console.error(result.error);
        alert.eror(result.error);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la création de l'utilisateur:",
        error
      );
      alert(
        "Une erreur s'est produite lors de la création de l'utilisateur : "
      );
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
    <UserAddPage
      listCompany={listCompany}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      listRoles={listRoles}
      emailError={emailError}
      handleEmailChange={handleEmailChange}
    />
  );
};

export default UserAddContainer;
