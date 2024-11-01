import React, { useState, useEffect } from "react";
import "../styles/Account.css";
import Button from "../components/Button/Button";
import LoginService from "../services/LoginService";

const Account = () => {
const [isActive, setIsActive] = useState(false);

useEffect(() => {
  const isUserActive = async () => {
    try {
      const token = await LoginService.getToken();  
      const resp = await LoginService.isActive(token);
      console.log(resp);
      setIsActive(resp);
    } catch (err) {
      console.error(err);
    }
  };
  isUserActive();
}, []);


  return (
    <div className="account">
      <h1>Cuenta</h1>
      {/*//TODO(Fray): convertir en componente? */}
      <div className="options">
        
        
      {!isActive ? (
        <>
          <Button 
          onClick={() => (window.location.href = "/Login")}
          classNameValue="font-medium text-2xl">Iniciar Sesión</Button>
          <Button
           onClick={() => (window.location.href = "/SignUp")}
           classNameValue="font-medium text-2xl w-full sm:w-auto"
           >Registrarse</Button>
        </>
        ) : (
        <Button
          classNameValue="font-medium text-2xl w-full sm:w-auto"
          onClick={() => (window.location.href = "/EditAccount")}>
          Editar Información de la cuenta</Button>
        )}




      </div>
    </div>
  );
};

export default Account;
