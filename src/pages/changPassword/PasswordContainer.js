import React, { useState, useEffect } from "react";

import apiRequest from "../../services/apiRequest";
import { useNavigate } from "react-router-dom";
import PasswordPage from "./PasswordPage";

const PasswordContainer = (userParam) => {
  const [user, setUser] = useState(null);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setUser(userParam);
  }, []);

  const onPasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await PasswordChangeApiCall(newPassword);
      if (response.success) {
        setSuccess("Mot de passe modifié avec succès.");
        setError("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError(
          response.message || "Erreur lors de la modification du mot de passe."
        );
      }
    } catch (err) {
      setError("Erreur lors de la modification du mot de passe.");
    }
  };
  // Simulate an API call
  const PasswordChangeApiCall = async (newPassword) => {
    user.user.password = newPassword;

    const result = await apiRequest({
      url: "/user/changPassword/" + user.user.id,
      method: "PUT",
      data: user,
    });

    if (result.status == 200) {
      alert("Succès !", "l'entreprise a bien été créer !");
      localStorage.removeItem("token");
      console.log("Utilisateur déconnecté");
      navigate("/login");
      window.location.reload();
    }
  };

  return (
    <PasswordPage
      handlePasswordChange={onPasswordChange}
      setNewPassword={setNewPassword}
      setConfirmPassword={setConfirmPassword}
      error={error}
      success={success}
      newPassword={newPassword}
      confirmPassword={confirmPassword}
    ></PasswordPage>
  );
};

export default PasswordContainer;
