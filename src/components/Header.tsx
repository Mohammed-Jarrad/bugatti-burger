import React from "react";
import Container from "./common/Container";
import { navlinks } from "@/constants/data";
import NavLink from "./NavLink";
import { IconType } from "react-icons";

const Header = () => {
    return (
        <header className="h-[--header-height] grid fixed w-full top-0 z-50">
            <Container className="flex items-center justify-between my-1.5 text-sm">
                <ul className="flex items-center gap-6">
                    {navlinks.map(({ href, title, icon }) => (
                        <NavLink key={title} href={href} title={title} icon={icon} />
                    ))}
                </ul>
                <p>Logo</p>
            </Container>    
        </header>
    );
};

export default Header;
