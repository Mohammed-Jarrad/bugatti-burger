"use client";
import { socials } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="size-full flex-c justify-center items-center gap-8">
            <h1 className="text-3xl md:text-5xl flex-c gap-2 text-center font-bold ">
                أهلاً وسهلاً بكم في
                <span className="text-primary">بوجاتي بورجر!</span>
            </h1>

            <Link href="/menu" className="text-white text-xl border border-primary py-1 px-3 rounded-lg hover:bg-primary transition">
                القائمة
            </Link>

            <Image
                src="/assets/Bugatti-logo.svg"
                alt={"logo"}
                width={200}
                height={200}
                className="size-[200px] md:size-[300px] rounded-full object-cover"
            />

            <div className="flex-center flex-col gap-5">
                <div className="flex items-center gap-2">
                    <Link
                        href={socials.instagram}
                        className="hover:text-primary transition"
                        target="_blank"
                    >
                        <FaInstagram size={30} />
                    </Link>
                    <Link
                        href={socials.facebook}
                        className="hover:text-primary transition"
                        target="_blank"
                    >
                        <FaFacebookF size={30} />
                    </Link>
                </div>
                <p className="text-xs md:text-base">{socials.location}</p>
                <Link href={`tel:${socials.phone}`} dir="ltr">
                    {socials.phone}
                </Link>
            </div>
        </div>
    );
};

export default Hero;
