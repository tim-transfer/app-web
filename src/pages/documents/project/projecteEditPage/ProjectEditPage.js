import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProjectEditPage = ({ projectData, onChange, onSubmit }) => {
  return (
    <Container sx={{ mt: "5em" }} maxWidth="sm">
      <Typography variant="h4">Modification d'un projet</Typography>
      <form className="mt-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <InputLabel htmlFor="nameProject">Nom du projet</InputLabel>
          <TextField
            id="nameProject"
            name="nameProject"
            value={projectData.nameProject}
            onChange={onChange}
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
            value={projectData.startingDate}
            onChange={onChange}
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
            value={projectData.endingDate}
            onChange={onChange}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Modifier le projet
        </Button>
      </form>
    </Container>
  );
};

export default ProjectEditPage;
