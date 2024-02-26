import React from 'react';

const InputText = ({ type, label, value,placeholder="" }) => {
  return (
    <div className="mt-2">
      <label htmlFor="component" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        id="component"
        type={type}
        value={value}
        className="
          block w-full rounded-md 
          border-gray-300 
          py-2 px-3 
          text-gray-900 
          shadow-sm 
          focus:ring-indigo-500 
          focus:border-indigo-500 
          sm:text-sm 
          mt-1"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default InputText;
