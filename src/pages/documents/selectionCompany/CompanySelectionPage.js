import { TableContainer } from "@mui/material";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Grid,
} from "@mui/material";

const CompanySelectionPage = ({ listCompanies, selectCompany }) => {
  // Constants for pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering the list of companies based on the search term
  const filteredListCompanies = listCompanies.filter((company) =>
    ["name", "address", "siret", "direct"].some((key) =>
      company[key].toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate the indices for the current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = filteredListCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredListCompanies.length / itemsPerPage);

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search term change
  };

  return (
    <Container sx={{ mt: "5em" }}>
      <Grid container spacing={2}>
        {/* Search Bar */}
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
            <Typography variant="h5" gutterBottom>
              Liste des entreprises
            </Typography>
            <TextField
              placeholder="Recherche"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              size="small"
              fullWidth
              variant="outlined"
              style={{ marginBottom: "1rem" }}
            />
          </Paper>
        </Grid>

        {/* Add Company Button */}
        <Grid item xs={12}>
          <Button
            href="company/companyAddPage"
            variant="contained"
            color="primary"
            size="small"
            style={{ textTransform: "none" }}
          >
            Ajouter
          </Button>
        </Grid>

        {/* Companies Table */}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell>Adresse</TableCell>
                  <TableCell>Numéro de siret</TableCell>
                  <TableCell>Dirigeant</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentCompanies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.address}</TableCell>
                    <TableCell>{company.siret}</TableCell>
                    <TableCell>{company.direct}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => selectCompany(company.id)}
                        style={{ textTransform: "none" }}
                        size="small"
                      >
                        Accéder à l'administration des fichiers
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

export default CompanySelectionPage;
