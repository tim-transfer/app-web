import { useState } from "react";
import InputText from "../component/InputText";
import Button from "../component/Button";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
            <>
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  {/* <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Connectez-vous à votre compte
                  </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="/dashboard" method="POST">
                    <div>
                        <div className="mt-2">
                            <InputText
                            type="email"
                            label="E-mail"
                            />
                         </div>                     
                    </div>
        
                    <div>                  
                        <div className="mt-2">
                            <InputText
                            type="password"
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
                        type="submit"
                        label="Connexion"
                        style="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                      </Button>
                    </div>
                  </form>
        
                  <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Inscrivez-vous ! 
                    </a>
                  </p>
                </div>
              </div>
              </>
    
      );
    };
export default Login;