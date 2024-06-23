import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const ProjectListPage = ({
  projects,
  addProject,
  loadInformationsFiles,
  onEditProject,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Container sx={{ mt: "5em" }}>
      <Grid container spacing={2}>
        {/* Add Project Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ textTransform: "none" }}
            onClick={addProject}
          >
            Ajouter
          </Button>
        </Grid>

        {/* Title */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Liste des projets
          </Typography>
        </Grid>

        {/* Projects Table */}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nom du projet</TableCell>
                  <TableCell>Date début</TableCell>
                  <TableCell>Date fin</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.nameProject}</TableCell>
                    <TableCell>{project.startingDate}</TableCell>
                    <TableCell>{project.endingDate}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => loadInformationsFiles(project.id)}
                        style={{ marginRight: "0.5rem", textTransform: "none" }}
                      >
                        Accéder
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => onEditProject(project.id)}
                        style={{ marginRight: "0.5rem", textTransform: "none" }}
                      >
                        Modifier
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        style={{ textTransform: "none" }}
                      >
                        Supprimer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Pagination Controls */}
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={prevPage}
                disabled={currentPage === 1}
                size="small"
                style={{ textTransform: "none" }}
              >
                Page précédente
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Page {currentPage} sur {totalPages}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                size="small"
                style={{ textTransform: "none" }}
              >
                Page suivante
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectListPage;
