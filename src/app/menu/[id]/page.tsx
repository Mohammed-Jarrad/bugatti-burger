"use client";

import BackButton from "@/components/BackButton";
import Meel from "@/components/Meel";
import Container from "@/components/common/Container";
import { categories, meels } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const MeelsWithCategory = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const id: string = String(useParams().id);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });
    return (
        <div className="">
            <div
                className={cn(
                    "flex-center gap-4 my-5 py-2 sticky top-[--header-height] z-50",
                    isScrolled && "bg-black/50 backdrop-blur-lg"
                )}
            >
                <BackButton />
                <h1 className="text-xl md:text-3xl font-bold">
                    {categories.find((category) => category.id === Number(id))?.title}
                </h1>
            </div>
            <Container className="my-12 overflow-hidden">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {meels
                        .filter((meel) => meel.categoryId === Number(id))
                        .map((meel, index) => (
                            <Meel key={meel.name} meel={meel} index={index} />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default MeelsWithCategory;
