import React from "react";
import "../styles/Account.css";

const Account = () => {
  return (
    <div className="account">
      <h1>Account</h1>
      {/*//TODO(Fray): convertir en componente? */}
      <div className="options">
        <button
          role="link"
          onClick={() => (window.location.href = "/Login")}
          className="btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center hover:text-black"
        >
          Iniciar sesión
        </button>

        <button
          role="link"
          onClick={() => (window.location.href = "/SignUp")}
          className="btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center hover:text-black"
        >
          Registrarse
        </button>

        <button
          role="link"
          onClick={() => (window.location.href = "/EditAccount")}
          className="btn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center hover:text-black"
        >
          Editar información de la cuenta
        </button>
      </div>
    </div>
  );
};

export default Account;
