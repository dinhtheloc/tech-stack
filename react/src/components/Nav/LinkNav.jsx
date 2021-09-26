import React from "react";
import { Link } from "react-router-dom";
const LinkNav = ({children, link}) => {
    return (
        <Link className="hover:text-yellow-100 transition-colors" to={link}>{children}</Link>
    );
};

export default LinkNav;