import React from 'react';

const Button = ({ type, label, value, style }) => {
  return (
    <button
        type={type}
        className={style}>
        {label}
    </button>
  );
};

export default Button;
