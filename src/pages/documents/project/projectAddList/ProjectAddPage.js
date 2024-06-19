import React, { useState } from "react";
import {
  Typography,
  Container,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";

const ProjectAddPage = ({ onChange, onSubmit }) => {
  const [formData, setFormData] = useState({
    nameProject: "",
    startingDate: "",
    endingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (onChange) {
      onChange(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Création d'un projet</Typography>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <InputLabel htmlFor="nameProject">Nom du projet</InputLabel>
          <TextField
            id="nameProject"
            name="nameProject"
            value={formData.nameProject}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="startingDate">Date de démarrage</InputLabel>
          <TextField
            id="startingDate"
            name="startingDate"
            type="date"
            value={formData.startingDate}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="endingDate">Date de fin</InputLabel>
          <TextField
            id="endingDate"
            name="endingDate"
            type="date"
            value={formData.endingDate}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Créer un projet
        </Button>
      </form>
    </Container>
  );
};

export default ProjectAddPage;
