import React from 'react';

import styles from './Button.module.css'

const Button = ({ children, classNameValue, onClick }) => {
  return (
    <button className={classNameValue ? classNameValue : styles.button } onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;