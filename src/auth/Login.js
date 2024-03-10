import { useState } from "react";
import InputText from "../component/InputText";
import Button from "../component/Button";
import apiRequest from "../services/apiRequest";
import { redirect, useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const response = await apiRequest({url : "/auth/login", method: "POST", data :{ email, password }});
    if (response.data.result == true) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("idUser", response.data.idUser);
      navigate('/dashboard')
    }
  }
  return (
    <>
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
                  onChange={(value) => {setPassword(value.target.value)}}
                  label="Mot de passe"
                />
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Mot de passe oubliée ?
                  </a>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div>
              <Button
                type="button"
                onClick={() => login()}
                label="Connexion"
                style="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default Login;