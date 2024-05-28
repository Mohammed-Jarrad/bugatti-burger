"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export interface NavLinkProps {
    href: string;
    title: string;
    className?: string;
    icon: React.ReactNode;
}

function NavLink({ href, title, icon, className }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className={cn("", className)}>
            <Link
                data-active={isActive}
                href={href}
                className={cn(
                    "transition relative flex items-center gap-1.5 py-1.5 px-3",
                    className
                )}
            >
                {icon}
                <span className={cn(" mix-blend-exclusion")}>{title}</span>

                {isActive && (
                    <motion.div
                        layoutId="active-link"
                        className="absolute inset-0 bg-white/70 -z-10"
                        initial={{ skewX: -12 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                )}
            </Link>
        </li>
    );
}

export default NavLink;
