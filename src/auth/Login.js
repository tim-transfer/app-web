import { useState, useRef, useEffect } from "react";
import InputText from "../component/InputText";
import apiRequest from "../services/apiRequest";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const passwordRef = useRef(null);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    if (!open && passwordRef.current) {
      passwordRef.current.focus();
    }
  }, [open]);

  const login = async () => {
    console.log("Login attempt");
    try {
      const response = await apiRequest({
        url: "/auth/login",
        method: "POST",
        data: { email, password },
      });
      if (response.data.result) {
        console.log("Login successful");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("idUser", response.data.idUser);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      } else {
        console.log("Login failed: incorrect credentials");
        setOpen(true);
      }
    } catch (error) {
      console.error("Login error", error);
      setOpen(true);
    }
  };

  const handleClose = () => {
    console.log("Dialog closed");

    window.location.reload();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Alerte"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Votre identifiant ou votre mot de passe est faux.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quitter</Button>
        </DialogActions>
      </Dialog>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="../../img/datatim-logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connectez-vous à votre compte
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <div className="mt-2">
                <InputText
                  type="email"
                  value={email}
                  onChange={(value) => setEmail(value.target.value)}
                  label="E-mail"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <InputText
                  type="password"
                  value={password}
                  onChange={(value) => {
                    setPassword(value.target.value);
                  }}
                  label="Mot de passe"
                  ref={passwordRef}
                />
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Mot de passe oubliée ?
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <Button onClick={() => login()} color="primary">
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
