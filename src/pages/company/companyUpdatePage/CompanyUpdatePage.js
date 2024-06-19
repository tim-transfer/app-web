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

const UserUpdatePage = ({ handleChange, handleSubmit, formData }) => {
  return (
    <Container maxWidth="sm">
      <View>
        <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Mettre à jour une entreprise
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Modifier les informations de l'entreprise
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Nom de l'entreprise
                </Typography>
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Adresse de l'entreprise
                </Typography>
                <TextField
                  id="address"
                  name="address"
                  variant="outlined"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Numéro de siret de l'entreprise
                </Typography>
                <TextField
                  id="siret"
                  name="siret"
                  variant="outlined"
                  value={formData.siret}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Nom du dirigeant de l'entreprise
                </Typography>
                <TextField
                  id="direct"
                  name="direct"
                  variant="outlined"
                  value={formData.direct}
                  onChange={handleChange}
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
                  Mettre à jour l'entreprise
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </View>
    </Container>
  );
};

export default UserUpdatePage;
