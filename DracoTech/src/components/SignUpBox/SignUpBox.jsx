import React from "react";


import Button from '../Button/Button';

import styles from './SignUpBox.module.css'

const handleGoogleClick = () => {
    alert('google clicked')
}

const SignUpWithBox = () => {
    return (
    <div className="grid grid-cols-1" >
        <div className="row" >
            <input type="text" placeholder="Su nombre"></input>
        </div>
        <div className="row sign-up-with-box">
            <Button onClick={handleGoogleClick}  >Sign Up</Button>
        </div>
    </div>
    );
  };


export default SignUpWithBox