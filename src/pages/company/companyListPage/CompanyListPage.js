import React, { useState } from "react";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

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
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Filtre</h1>
        <TextField
          placeholder={"Recherche"}
          type={"text"}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <div className="flex justify-between items-center px-5 mt-4 mb-5" >      
          <h1 className="text-xl font-semibold">Liste des entreprises</h1>
          <a href="company/companyAddPage" className="flex items-center">
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
        
        <div className="flex justify-between mt-5">
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
