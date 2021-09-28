
import React from "react";

const Button = ({ children }) => {
    return (
        <button className='
        transition-colors
        bg-blue-400
        hover:bg-blue-700
        text-white block px-4 py-2 rounded-md w-full'>{children}</button>
    );
};

export default Button;