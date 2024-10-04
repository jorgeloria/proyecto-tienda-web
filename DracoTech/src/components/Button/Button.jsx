import React from 'react';

import styles from './Button.module.css'

const Button = ({ children, classNameValue, onClick }) => {
  return (
    <button className={styles.button + ' ' + classNameValue} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;