import { FaHouse } from "react-icons/fa6";
import { BiInfoCircle, BiPhone, BiSolidFoodMenu } from "react-icons/bi";
import { NavLinkProps } from "@/components/NavLink";

type navlinksProps = NavLinkProps[];

export const navlinks: navlinksProps = [
    {
        href: "/",
        title: "الرئيسية",
        icon: <FaHouse className="size-5" />,
    },
    {
        href: "/menu",
        title: "المنيو",
        icon: <BiSolidFoodMenu className="size-5" />,
    },
    {
        href: "/contact",
        title: "اتصل بنا",
        icon: <BiPhone className="size-5" />,
    },
    {
        href: "/about",
        title: "من نحن",
        icon: <BiInfoCircle className="size-5" />,
    },
];
