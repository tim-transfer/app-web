import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

import { format } from "date-fns";
import { fr } from "date-fns/locale";

const DocumentsByCompanyPage = ({
  formData,
  company,
  fileInformations,
  onChange,
  onDateChange,
  onSubmit,
}) => {
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    if (
      !formData.nameFile ||
      !formData.dateButoire
    ) {
      setError(true);
    } else {
      setError(false);
      onSubmit(event);
    }
  };

  return (
    <Container sx={{ mt: "5em" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">{company.name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">Nom du fichier demandé</Typography>
                <TextField
                  id="name"
                  name="nameFile"
                  value={formData.nameFile}
                  variant="outlined"
                  onChange={onChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Date butoire</Typography>
                <DatePicker
                  id="dateButoire"
                  selected={formData.dateButoire}
                  onChange={onDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="w-full"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Créer la demande de fichier
                </Button>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Alert variant="filled" severity="error">
                    Attention, l'information de fichier ne s'est pas enregistrée
                    correctement.
                  </Alert>
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>
        <Grid item xs={6}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nom du fichier</TableCell>
                <TableCell>Est rendu</TableCell>
                <TableCell>Date limite de rendu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fileInformations.map((fileInformation) => (
                <TableRow key={fileInformation.id}>
                  <TableCell>{fileInformation.nameFile}</TableCell>
                  <TableCell>
                    {fileInformation.isActive ? "Non" : "Oui"}
                  </TableCell>
                  <TableCell>
                    {format(new Date(fileInformation.dateLimit), "P", {
                      locale: fr,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DocumentsByCompanyPage;
