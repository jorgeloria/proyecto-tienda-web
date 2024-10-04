import React from "react";


import Button from '../Button/Button';

import styles from './SignUpForm.module.css'

const SignUpForm = () => {
    console.log('loading the sign up form');
    return(
        <form className={styles.form}>
            <div className="grid grid-cols-1 gap-6" >
                <div className="row" >
                    <h2 className={styles.h2} >Credenciales</h2>
                </div>
                <div className="row" >
                    <label htmlFor="username">Nombre Completo</label>
                </div>
                <div className="row" >
                    <input className={styles.campo} type="text" ></input>
                </div>
                <div className="row" >
                    <label htmlFor="correo">Correo Electrónico</label>
                </div>
                <div className="row" >
                    <input className={styles.campo} type="email" ></input>
                </div>
                <div className="row">
                    <label htmlFor="password">Contraseña</label>
                </div>
                <div className="row">
                    <input className={styles.campo} type="password" ></input>
                </div>
                <div className="row">
                    <label htmlFor="password">Repita Contraseña</label>
                </div>
                <div className="row">
                    <input className={styles.campo} type="password" ></input>
                </div>

                <div className="row text-center ">
                    <Button>Crear Cuenta</Button>
                </div>
            </div>
        </form>

    );
};

export default SignUpForm