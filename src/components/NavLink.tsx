"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

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
            <Link href={href} className="flex items-center gap-1.5">
                {icon}
                <span>{title}</span>
            </Link>
        </li>
    );
}

export default NavLink;
