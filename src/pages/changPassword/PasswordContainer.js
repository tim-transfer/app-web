import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import apiRequest from "../../services/apiRequest";
import { useNavigate } from "react-router-dom";

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

  const handlePasswordChange = async (e) => {
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
    const result = await apiRequest({
      url: "/user/changPassword/" + user.user.id,
      method: "PUT",
      data: user.user,
    });

    if (result.status == 200) {
      alert("Succès !", "l'entreprise a bien été créer !");
      localStorage.removeItem("token");
      console.log("Utilisateur déconnecté");
      navigate("/login")
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Modifier le mot de passe
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <Box
          component="form"
          onSubmit={handlePasswordChange}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="newPassword"
            label="Nouveau mot de passe"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="confirmPassword"
            label="Confirmer le nouveau mot de passe"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Modifier le mot de passe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordContainer;
