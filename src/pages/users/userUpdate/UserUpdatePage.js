import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
} from "@mui/material";

const UserUpdatePage = ({
  listCompany,
  handleChange,
  handleSubmit,
  formData,
  listRoles,
  emailError,
  handleEmailChange,
}) => {
  return (
    <Container sx={{ mt: "5em" }} maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            style={{
              padding: "1rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "0.375rem",
              boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
              marginTop: "4em",
              width: "100%",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Modification d'un utilisateur
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper
            style={{
              padding: "1rem",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "0.375rem",
              boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
              marginTop: "4em",
              width: "100%",
            }}
          >
            <form className="mt-4" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="firstName">Prénom</InputLabel>
                    <TextField
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="lastName">Nom</InputLabel>
                    <TextField
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="email">Adresse mail</InputLabel>
                    <TextField
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      helperText={
                        emailError
                          ? "S'il vous plaît, rentrez une adresse mail valide."
                          : ""
                      }
                      inputProps={{
                        type: "email",
                      }}
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="companyId-label">Entreprise</InputLabel>
                    <Select
                      labelId="companyId-label"
                      id="companyId"
                      name="companyId"
                      value={formData.companyId}
                      onChange={handleChange}
                      label="Entreprise"
                      required
                    >
                      <MenuItem value="">Sélectionnez une entreprise</MenuItem>
                      {listCompany.map((company) => (
                        <MenuItem key={company.id} value={company.id}>
                          {company.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="isAdmin-label">Rôle</InputLabel>
                    <Select
                      labelId="isAdmin-label"
                      id="isAdmin"
                      name="isAdmin"
                      value={formData.isAdmin}
                      onChange={handleChange}
                      label="Rôle"
                      required
                    >
                      <MenuItem value="">Sélectionnez un rôle</MenuItem>
                      {listRoles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                          {role.libelle}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Mettre à jour l'utilisateur
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserUpdatePage;
