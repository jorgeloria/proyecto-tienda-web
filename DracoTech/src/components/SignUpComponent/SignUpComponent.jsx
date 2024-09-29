import React from "react";


import styles from "./SignUpComponent.module.css"

import Button from '../Button/Button';

import SignUpForm from "../SignUpForm/SignUpForm"

const LoginComponent = () => {
    return (
        <div className={styles.signUpMain} >

            <div className="grid grid-cols-1" >
                <div className="row" >
                    <h1 className={styles.inicioSesionHead} >Registro</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-400" >
                <div className="row">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
  };

export default LoginComponent