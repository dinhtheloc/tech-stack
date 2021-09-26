import React from "react";
import LinkNav from "./LinkNav";
const Nav = () => {
    return (
        <div className="p-4 flex justify-center items-center bg-gray-800 gap-x-8 text-white">
            <img src="/logo.svg" className="rounded-xl" style={{height: 70}} alt="logo"/>
            {/* <LinkNav link="/iphone">Iphone</LinkNav>
            <LinkNav link="/ipad">Ipad</LinkNav>
            <LinkNav link="/macbook">Macbook</LinkNav> */}
        </div>
    );
};

export default Nav;