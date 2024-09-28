import React from "react";


import Button from '../Button/Button';

import styles from './LoginForm.module.css'

const LoginForm = () => {
    console.log('loading the form');
    return(
        <form className={styles.form}>
            <div className="grid grid-cols-1 gap-6" >
                <div className="row" >
                    <h2 className={styles.h2} >Credenciales</h2>
                </div>
                <div className="row" >
                    <label htmlFor="username">Nombre de usuario</label>
                </div>
                <div className="row" >
                    <input className={styles.campo} type="text" ></input>
                </div>
                <div className="row">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="row">
                    <input className={styles.campo} type="password" ></input>
                </div>
                <div className="row text-center ">
                    <Button>Iniciar Sesión</Button>
                </div>
            </div>
        </form>

    );
};

export default LoginForm