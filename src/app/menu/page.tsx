"use client";
import Category from "@/components/Category";
import Container from "@/components/common/Container";
import { categories } from "@/constants/data";
import React from "react";
import { motion } from "framer-motion";

const MenuPage = () => {
    return (
        <Container className="py-12 flex-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-5 size-full"
            >
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </motion.div>
        </Container>
    );
};

export default MenuPage;
