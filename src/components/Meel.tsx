"use client";

import { IMeel } from "@/constants/data";
import Image from "next/image";
import React from "react";
import { BiShekel } from "react-icons/bi";
import { motion } from "framer-motion";

interface MeelProps {
    meel: IMeel;
    index: number;
}

const Meel: React.FC<MeelProps> = ({ meel, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="p-3 flex-c gap-4"
        >
            {/* Meel Image */}
            <div className="w-full group overflow-hidden rounded-xl">
                <Image
                    loading="lazy"
                    src={meel.image}
                    alt={meel.name}
                    width={200}
                    height={200}
                    className="w-full rounded-xl group-hover:scale-110 duration-300"
                />
            </div>
            {/* Name and Price */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg">{meel.name}</h2>
                <p className="flex items-center gap-0.5">
                    <BiShekel />
                    <span>{meel.price}</span>
                </p>
            </div>
            {/* Meel Ingredients */}
            {meel.ingredients && (
                <div className="flex-center flex-wrap gap-1 flex-1 size-full">
                    {meel.ingredients?.map((ingredient, index) => (
                        <div
                            key={index}
                            className="border border-primary backdrop-blur rounded-full p-2 text-sm"
                        >
                            {ingredient}
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Meel;
