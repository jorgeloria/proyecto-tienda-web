import React from "react";


import Button from '../Button/Button';

import styles from './LoginForm.module.css'
import LoginService from "../../services/LoginService";

const LoginForm = () => {
    const onFinish = event =>{
        event.preventDefault();
        console.log("onFinish")
        console.log(event);
        LoginService.doLogin("{'hello':'world'}");
        return false;
    };
    
    console.log('loading the form');
    
    return(
        <form className={styles.form} onSubmit={onFinish}  >
            <div className="grid grid-cols-1 gap-6" >
                <div className="row" >
                    <h2 className={styles.h2} >Credenciales</h2>
                </div>
                <div className="row" >
                    <label htmlFor="username">Nombre de usuario</label>
                </div>
                <div className="row" >
                    <input className={styles.campo} required={true} type="text" ></input>
                </div>
                <div className="row">
                    <label htmlFor="password">Contraseña</label>
                </div>
                <div className="row">
                    <input className={styles.campo} required={true} type="password" ></input>
                </div>
                <div className="row text-center ">
                    <Button onClick={onFinish} >Iniciar Sesión</Button>
                </div>
            </div>
        </form>

    );
};

export default LoginForm