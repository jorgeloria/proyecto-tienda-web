import React from "react";

import axios from "axios";
import Button from '../Button/Button';

import SignUpField from "./SignUpField";

import styles from './SignUpForm.module.css'
import { useState } from "react";

const registerUser = async (data) => {
    try {
        const response = await axios.post("http://localhost:3001/user/register",
            {
                name: data.name,
                email: data.email,
                password: data.password
            }
        )
    } catch(error) {
        console.log(error)
    }
}

const verifyFullName = (name) => {
    if (name.length === 0) {
        return "Por favor, ingresa tu nombre completo";
    }
    return ""
}

const verifyEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.length === 0) {
        return "Por favor, ingresa tu correo electrónico"
    } else if (!emailRegex.test(email)) {
        return "Por favor, ingresa un correo válido"
    }
    return ""
}

const verifyPassword = (password) => {
    if (password.length === 0) {
        return "Por favor ingresa una contraseña"
    }
    return "";
}

const verifyRepeatedPassword = (repeatedPassword) => {
    if (repeatedPassword.length === 0) {
        return "Por favor repite la contraseña"
    }
    return "";
}

const comparePasswords = (password, repeatedPassword) => {
    if (password != repeatedPassword) {
        return "Las contraseñas no coinciden"
    }
    return "";
}

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatedPassword: ""
    });

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        repeatedPasswordError: ""
    });
    
    const verifyInputs = () => {
        const nameError = verifyFullName(formData.name);
        const emailError = verifyEmail(formData.email);
        const passwordError = verifyPassword(formData.password);
        const repeatedPasswordError = verifyRepeatedPassword(formData.repeatedPassword);
        const matchingPasswordsError = comparePasswords(formData.password, formData.repeatedPassword)

        const newErrors = {
            nameError: nameError,
            emailError: emailError,
            passwordError: passwordError === "" ? matchingPasswordsError : passwordError,
            repeatedPasswordError: repeatedPasswordError === "" ? matchingPasswordsError : repeatedPasswordError
        };

        setErrors(newErrors);

        // Retornar true si no hay errores
        return Object.values(newErrors).every((error) => error === "");
    }

    const handleAccountRegistration = async (e) => {
        e.preventDefault();
        if (verifyInputs()) {
            // send to backend
            console.log("Los datos son válidos")
            registerUser(formData)
        } else {
            // do nothing?
            console.log("Hay errores en el formulario")
        }
    }

    return(
        <form className={styles.form}>
            <div className="grid grid-cols-1 gap-6" >
                <div className="row" >
                    <h2 className={styles.h2} >Credenciales</h2>
                </div>

                <SignUpField
                    title={"Nombre Completo"}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    error={errors.nameError}
                    required={true}
                    type="text"
                />

                <SignUpField
                    title={"Correo Electrónico"}
                    value={formData.email}
                    type="email"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    error={errors.emailError}
                    required={true}
                />

                <SignUpField
                    title={"Contraseña"}
                    value={formData.password}
                    type="password"
                    required={true}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    error={errors.passwordError}
                />

                <SignUpField
                    title={"Repita la contraseña"}
                    value={formData.repeatedPassword}
                    type="password"
                    required={true}
                    onChange={(e) => setFormData({...formData, repeatedPassword: e.target.value})}
                    error={errors.repeatedPasswordError}
                />

                <div className="row text-center ">
                    <Button type="button" onClick={handleAccountRegistration}>Crear Cuenta</Button>
                </div>
            </div>
        </form>

    );
};

export default SignUpForm