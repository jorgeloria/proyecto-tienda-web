import React from "react";


import styles from "./LoginComponent.module.css"

import Button from '../Button/Button';
import SignInWithBox from "../SignInWithBox/SignInWithBox";

import LoginForm from "../LoginForm/LoginForm"

const LoginComponent = () => {
    return (
        <div className={styles.loginMain} >

            <div className="grid grid-cols-1" >
                <div className="row" >
                    <h1 className={styles.inicioSesionHead} >Inicio de sesión</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-400" >
                <div className="row" >
                    <SignInWithBox></SignInWithBox>
                </div>
                <div className="row">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    );
  };

export default LoginComponent