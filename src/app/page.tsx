import Hero from "@/components/Hero";
import Container from "@/components/common/Container";
import { socials } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <Container className="py-12">
               <Hero />
            </Container>
        </>
    );
}
