"use client";
import { ICategory } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type CategoryProps = {
    category: ICategory;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <motion.div
         whileTap={{ scale: 0.97 }}
         whileHover={{ scale: 1.05 }}>
            <Link
                href={`/menu/${category.id}`}
                className="group cursor-pointer border p-3 rounded-lg flex-c items-center gap-3 backdrop-blur-sm bg-white/5"
            >
                <Image
                    src="/assets/Bugatti-logo.svg"
                    alt={category.title}
                    width={200}
                    height={200}
                    className="size-[200px] rounded-full object-cover"
                />
                <p className="group-hover:text-primary transition">{category.title}</p>
            </Link>
        </motion.div>
    );
};

export default Category;
