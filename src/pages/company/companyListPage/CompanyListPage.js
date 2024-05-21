import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const CompanyListPage = ({
  listCompanies,
  handleConfirmDelete,
  handleUpdate,
}) => {
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
    <div>
      {/* Search Bar */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "0.375rem",
          boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
          marginTop: "1.5rem",
          width: "100em"
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
      </div>

      {/* Add Company Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Button
          href="company/companyAddPage"
          variant="contained"
          color="primary"
          size="small"
          style={{ textTransform: "none" }}
        >
          Ajouter
        </Button>
      </div>

      {/* Companies Table */}
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
                    onClick={() => handleUpdate(company.id)}
                    style={{ textTransform: "none" }}
                    size="small"
                  >
                    Modifier
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      handleConfirmDelete(company.id, company.name)
                    }
                    size="small"
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
          marginTop: "1rem",
        }}
      >
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
        <Typography variant="body2">
          Page {currentPage} sur {totalPages}
        </Typography>
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
      </div>
    </div>
  );
};

export default CompanyListPage;
