import React, { Component } from "react";
import Button from '../Button/Button';

import styles from './LoginForm.module.css'
import LoginService from "../../services/LoginService";
import { Link } from "react-router-dom";

class LoginForm extends Component{
    constructor() {
        super();
        this.state = {
          username: "",
          password: ""
        };
      }
    
    onFinish = event => {
            event.preventDefault();
            console.log("onFinish")
            console.log(event);
            const loginInfo = {"email":this.state.username,"password":this.state.password}
            let result = LoginService.doLogin(loginInfo);
            result.then(response=>{
                console.log(response)
                if(response.status == 403){
                  console.log(response.errors);
                } else if(response.status == 200){
                    window.location.href = '/';
                }
              })
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
                        <input onChange={this.handleUNameChange} className={styles.campo} required={true} type="text" ></input>
                    </div>
                    <div className="row">
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="row">
                        <input 
                        onChange={this.handlePassChange}
                        className={styles.campo} required={true} type="password" ></input>
                    </div>
                    <div className="row text-center ">
                        <Button onClick={this.onFinish} >Iniciar Sesión</Button>
                    </div>
                </div>
            </form>
    
        );
    }
}

// const LoginForm = () => {
//     let username = "";
//     let password = "";
//     const onFinish = event =>{
//         event.preventDefault();
//         console.log("onFinish")
//         console.log(event);
//         LoginService.doLogin("{'username':${username}, 'password':${password}}");
//         return false;
//     };
    
//     console.log('loading the form');
    
//     return(
//         <form className={styles.form} onSubmit={onFinish}  >
//             <div className="grid grid-cols-1 gap-6" >
//                 <div className="row" >
//                     <h2 className={styles.h2} >Credenciales</h2>
//                 </div>
//                 <div className="row" >
//                     <label htmlFor="username">Nombre de usuario</label>
//                 </div>
//                 <div className="row" >
//                     <input className={styles.campo} required={true} type="text" ></input>
//                 </div>
//                 <div className="row">
//                     <label htmlFor="password">Contraseña</label>
//                 </div>
//                 <div className="row">
//                     <input className={styles.campo} required={true} type="password" ></input>
//                 </div>
//                 <div className="row text-center ">
//                     <Button onClick={onFinish} >Iniciar Sesión</Button>
//                 </div>
//             </div>
//         </form>

//     );
// };

export default LoginForm