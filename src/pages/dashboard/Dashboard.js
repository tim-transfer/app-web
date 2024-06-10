import View from "../../component/View";

import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const userJson = localStorage.getItem("user");
      if (userJson) {
        const parsedUser = JSON.parse(userJson);
        setUser(parsedUser);

        if (parsedUser.isFirstConnection) {
          navigate("/user/changFirstPassword/" + user, {
            state: { user: user },
          });
        }
      }
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors du parsing du JSON:", error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Utilisateur déconnecté");
    navigate("/login");
    window.location.reload();
  };

  return (
    <Box sx={{ mt: "5em" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tableau de bord
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="logout"
            onClick={handleLogout}
          >
            se déconnecter
          </IconButton>
        </Toolbar>
      </AppBar>

      {user ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginTop: 2 }}
        >
          <Grid item xs={12}>
            <Typography variant="h6" component="div">
              Voici vos informations
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Email : {user.email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Nom : {user.lastName}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Prénom : {user.firstName}</Typography>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
          Utilisateur non connecté
        </Typography>
      )}
    </Box>
  );
};

export default Dashboard;
