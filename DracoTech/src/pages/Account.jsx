import React from "react";
import "../styles/Account.css";
import Button from "../components/Button/Button";

const Account = () => {
  return (
    <div className="account">
      <h1>Cuenta</h1>
      {/*//TODO(Fray): convertir en componente? */}
      <div className="options">
        <Button 
          onClick={() => (window.location.href = "/SignUp")}
          classNameValue="font-medium text-2xl">Iniciar Sesión</Button>

        <Button
         onClick={() => (window.location.href = "/SignUp")}
         classNameValue="font-medium text-2xl w-full sm:w-auto"
        >Registrarse</Button>


        <Button
          classNameValue="font-medium text-2xl w-full sm:w-auto"
          onClick={() => (window.location.href = "/EditAccount")}>
          Editar Información de la cuenta</Button>
      </div>
    </div>
  );
};

export default Account;
