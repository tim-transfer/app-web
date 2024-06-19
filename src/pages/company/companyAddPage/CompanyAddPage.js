import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import View from "./../../../component/View";

const CompanyAddPage = ({ handleSubmit }) => {
  return (
    <Container sx={{ mt: "5em" }} maxWidth="sm">
      <Grid container spacing={2}>
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
            <Typography variant="h4" gutterBottom>
              Ajoutez une entreprise
            </Typography>
          </Paper>
        </Grid>

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
            <Typography variant="h4" gutterBottom>
              Créer une nouvelle entreprise
            </Typography>
            <form className="mt-4" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Nom de l'entreprise"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address"
                    name="address"
                    label="Adresse de l'entreprise"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="siret"
                    name="siret"
                    label="Numéro de siret de l'entreprise"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="direct"
                    name="direct"
                    label="Nom du dirigeant de l'entreprise"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Créer entreprise
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyAddPage;
