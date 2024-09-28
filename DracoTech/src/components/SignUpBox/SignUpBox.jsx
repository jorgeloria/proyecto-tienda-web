import React from "react";


import Button from '../Button/Button';

import styles from './SignUpBox.module.css'

const handleGoogleClick = () => {
    alert('google clicked')
}

const SignUpWithBox = () => {
    return (
    <div className="grid grid-cols-1 gap-6" >
        <div className="row" >
            <h2 className={styles.h2} >SSO</h2>
        </div>
        <div className="row">
            
            <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Inciar sesión con Google</span>
            </button>
            
        </div>
        <div className="row">
            <div className={styles.SSOButton} >
                <button type="button" className="py-2 px-4 max-w-md  flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                    </svg>
                    Iniciar con Facebook
                </button>
            </div>
        </div>
    </div>
    );
  };


export default SignUpWithBox