import React from 'react';

const Button = ({ type, label, value, style, onClick }) => {

  function handleClick() {
    onClick(value);
  }

  return (
    <button
        type={type}
        className={style}
        onClick={handleClick}>
        {label}
    </button>
  );
};
export default Button;
