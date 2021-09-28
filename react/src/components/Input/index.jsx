import React from "react";

const Input = ({ type, placeholder }) => {
    return (
        <input className='block h-10 w-full 
        px-4
        transition-colors
        border rounded-lg 
        focus:outline-none 
        focus:rounded-lg
        focus:border-blue-400
        ' 
        placeholder={placeholder || ''}
        type={type || 'text'}></input>
    );
};

export default Input;