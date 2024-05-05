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
} from '@mui/material';

const CompanyListPage = ({
  listCompanies,
  handleConfirmDelete,
  handleUpdate,
}) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListCompanies = listCompanies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.siret.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.direct.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = filteredListCompanies.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredListCompanies.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  return (
    <div>
      <div style={{ padding: "1.5rem", backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "0.375rem", boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", marginTop: "2.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Filtre</h1>
        <TextField
          placeholder={"Recherche"}
          type={"text"}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div style={{ padding: "1.5rem", backgroundColor: "white", border: "1px solid #e5e7eb", borderRadius: "0.375rem", boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)", marginTop: "2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.3125rem 0.625rem", marginTop: "0.625rem", marginBottom: "0.9375rem" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Liste des entreprises</h1>
          <a href="company/companyAddPage" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => console.log("Add company")} // Replace console.log with your add company logic
            >
              Ajouter
            </Button>
          </a>
        </div>

        <TableContainer component={Paper}>
          <Table>
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
                      style={{ marginRight: "0.5rem" }}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleConfirmDelete(company.id, company.name)}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Page précédente
          </Button>
          <Typography variant="body1">
            Page {currentPage} sur {totalPages}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Page suivante
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyListPage;
