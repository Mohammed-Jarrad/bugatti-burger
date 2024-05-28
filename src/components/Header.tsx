"use client";
import React, { useState } from "react";
import Container from "./common/Container";
import { navlinks } from "@/constants/data";
import NavLink from "./NavLink";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
    return (
        <header
            className={cn(
                "h-[--header-height] grid fixed w-full top-0 z-50",
                "bg-black/10 backdrop-blur-lg supports-[backdrop-filter]:bg-black/20 supports-[backdrop-filter]:backdrop-blur-lg"
            )}
        >
            <Container className="flex items-center justify-between my-1.5 text-xs md:text-sm">
                <ul className="flex items-center gap-6">
                    {navlinks.map(({ href, title, icon }) => (
                        <NavLink key={title} href={href} title={title} icon={icon} />
                    ))}
                </ul>
                <Link href="/" className="flex items-stretch">
                    <Image
                        src="/assets/Bugatti-icon.svg"
                        alt="Bugatti Logo"
                        width={50}
                        height={50}
                        className="size-[35px] md:size-[50px]"
                    />
                </Link>
            </Container>
        </header>
    );
};

export default Header;
