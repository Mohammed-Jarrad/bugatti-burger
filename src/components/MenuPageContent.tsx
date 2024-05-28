"use client";
import React from "react";
import Category from "./Category";
import { categories } from "@/constants/data";
import { motion } from "framer-motion";

const MenuPageContent = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 size-full overflow-hidden p-1">
            {categories.map((category, index) => (
                <Category key={category.id} category={category} index={index} />
            ))}
        </div>
    );
};

export default MenuPageContent;
