import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import View from "./../../../component/View";

const UserUpdatePage = ({ handleChange, handleSubmit, formData }) => {
  return (
    <Container maxWidth="sm">
      <View>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
          <Typography variant="h4" gutterBottom>Mettre à jour une entreprise</Typography>
        </div>

        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
          <Typography variant="h4" gutterBottom>Modifier les informations de l'entreprise</Typography>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Nom de l'entreprise</label>
              <TextField
                id="name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">Adresse de l'entreprise</label>
              <TextField
                id="address"
                name="address"
                variant="outlined"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="siret" className="block text-sm font-medium text-gray-600">Numéro de siret de l'entreprise</label>
              <TextField
                id="siret"
                name="siret"
                variant="outlined"
                value={formData.siret}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="direct" className="block text-sm font-medium text-gray-600">Nom du dirigeant de l'entreprise</label>
              <TextField
                id="direct"
                name="direct"
                variant="outlined"
                value={formData.direct}
                onChange={handleChange}
                fullWidth
                required
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Mettre à jour l'entreprise
            </Button>
          </form>
        </div>
      </View>
    </Container>
  );
};

export default UserUpdatePage;
