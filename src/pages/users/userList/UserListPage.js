import React, { useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField
} from "@mui/material";
import View from "./../../../component/View";

const UserListPage = ({ listUser, handleConfirmDelete, handleUpdate }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredListUser = listUser.filter(
    (user) =>
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUserPage = filteredListUser.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredListUser.length / itemsPerPage);

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
    <div
      style={{
        padding: "1rem",
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "0.375rem",
        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
        marginTop: "1.5rem",
      }}
    >
      <TableContainer>
        <View>
          <Typography variant="h5" gutterBottom>
            Liste des utilisateurs
          </Typography>
          <div style={{ marginBottom: "1rem" }}>
            <Typography variant="subtitle1" gutterBottom>
              Filtre
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Button
              href="user/add"
              variant="contained"
              color="primary"
              size="small"
              style={{ textTransform: "none" }}
            >
              Ajouter
            </Button>
          </div>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Prénom</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Entreprise</TableCell>
                <TableCell>Rôle</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUserPage.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.lastName}
                  </TableCell>
                  <TableCell>
                    {user.firstName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.companyName}
                  </TableCell>
                  <TableCell>
                    {user.isAdmin ? "Admin" : "Utilisateur"}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(user.id)}
                      size="small"
                      style={{ marginRight: "0.5rem", textTransform: "none" }}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleConfirmDelete(user.id, user.email)}
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
        </View>
      </TableContainer>
    </div>
  );
};

export default UserListPage;
