import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import View from "./../../../component/View";
import InputText from "./../../../component/InputText";

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

  const totalPages = Math.ceil(filteredListUser.length / itemsPerPage) + 1;

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
    <div style={{ marginLeft: "0.001em" }}>
      <Container>
        <View>
        <Typography variant="h4">Liste des utilisateurs</Typography>
        <br></br>
        <br></br>
          <div>
            <Typography variant="h8" gutterBottom>
              Filtre
            </Typography>
            <InputText
              placeholder={"Recherche"}
              type={"text"}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem",
              }}
            >
             
              <Button
                href="user/add"
                variant="contained"
                color="primary"
                style={{ textTransform: "none", marginRight: "25em" }}
              >
                Ajouter
              </Button>
            </div>
            <Table>
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
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.companyName}</TableCell>
                    <TableCell>
                      {user.isAdmin ? "Admin" : "Utilisateur"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdate(user.id)}
                        sx={{ marginRight: "0.5rem", textTransform: "none" }}
                      >
                        Modifier
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleConfirmDelete(user.id, user.email)}
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
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={prevPage}
                disabled={currentPage === 1}
                style={{ textTransform: "none" }}
              >
                Page précédente
              </Button>
              <Typography color="textSecondary">
                Page {currentPage} sur {totalPages}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                style={{ textTransform: "none" }}
              >
                Page suivante
              </Button>
            </div>
          </div>
        </View>
      </Container>
    </div>
  );
};

export default UserListPage;
