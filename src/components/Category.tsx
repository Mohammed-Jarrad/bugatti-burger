"use client";
import { ICategory } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type CategoryProps = {
    category: ICategory;
    index: number;
};

const Category: React.FC<CategoryProps> = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer hover:ring-1 hover:ring-white/20 p-3 rounded-lg backdrop-blur-sm bg-white/5"
        >
            <Link href={`/menu/${category.id}`} className="group flex-c items-center gap-3 ">
                <Image
                    src="/assets/Bugatti-logo.svg"
                    alt={category.title}
                    width={200}
                    height={200}
                    className="size-[200px] rounded-full object-cover"
                />
                <motion.p className="group-hover:text-primary">{category.title}</motion.p>
            </Link>
        </motion.div>
    );
};

export default Category;
