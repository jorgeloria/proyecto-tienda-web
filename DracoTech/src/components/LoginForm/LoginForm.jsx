import React, { Component } from "react";
import Button from '../Button/Button';

import styles from './LoginForm.module.css'
import LoginService from "../../services/LoginService";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoginForm extends Component{
    constructor() {
        super();
        this.state = {
          username: "",
          password: "",
          isLoading: false
        };
      }
    
    toggleIsLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
        })
    }

    onFinish = event => {
            event.preventDefault();
            this.toggleIsLoading();
            const loginInfo = {"email":this.state.username,"password":this.state.password}
            let result = LoginService.doLogin(loginInfo);
            result.then(response=>{
                if(response.status == 200){
                    window.location.href = '/';
                }
              }).catch((res)=>{
                if(res.status == 401){
                    toast.error("Datos incorrectos", {
                      position: 'bottom-right',
                      theme: 'dark'
                    });
                  }
              })
              .finally(()=>{
                this.toggleIsLoading();
              });
            return false;
        }

    handleUNameChange = event => {
        this.setState({username: event.target.value})
    }

    handlePassChange = event => {
        this.setState({password: event.target.value})
    }

    render(){
        return(
            <form className={styles.form} onSubmit={this.onFinish}  >
                <div className="grid grid-cols-1 gap-6" >
                    <div className="row" >
                        <h2 className={styles.h2} >Credenciales</h2>
                    </div>
                    <div className="row" >
                        <label htmlFor="username">Nombre de usuario</label>
                    </div>
                    <div className="row" >
                        <input name="username" autoFocus required onChange={this.handleUNameChange} className={styles.campo} type="email" ></input>
                    </div>
                    <div className="row">
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="row">
                        <input 
                        name="password"
                        onChange={this.handlePassChange}
                        className={styles.campo} required type="password" ></input>
                    </div>
                    <div className="row text-center ">
                        { !this.state.isLoading &&
                            <Button type="submit"  >Iniciar Sesión</Button>
                        }
                        { this.state.isLoading &&
                            <img className="loading"/>
                        }
                    </div>
                    <ToastContainer/>
                </div>
            </form>
    
        );
    }
}

export default LoginForm