import React from 'react';
import { Container, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const UserUpdatePage = ({
  listCompany,
  handleChange,
  handleSubmit,
  formData,
  listRoles
}) => {
  return (
    <Container maxWidth="sm">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <Typography variant="h4" gutterBottom>Modification d'un utilisateur</Typography>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="email">Adresse mail</InputLabel>
            <TextField
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div className="mb-4">
            <InputLabel id="companyId-label">Entreprise</InputLabel>
            <Select
              labelId="companyId-label"
              id="companyId"
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="">Sélectionnez une entreprise</MenuItem>
              {listCompany.map((company) => (
                <MenuItem key={company.id} value={company.id}>
                  {company.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="mb-4">
            <InputLabel id="isAdmin-label">Rôle</InputLabel>
            <Select
              labelId="isAdmin-label"
              id="isAdmin"
              name="isAdmin"
              value={formData.isAdmin}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="">Sélectionnez un rôle</MenuItem>
              {listRoles.map((role) => (
                <MenuItem key={role.value} value={role.value}>
                  {role.text}
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Mettre à jour l'utilisateur
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserUpdatePage;
