import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { bryant, changa, comfortaa } from "@/styles/fonts";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Bugatti Burger",
    description: "Bugatti Burger For Everyone",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html
            lang="en"
            dir="rtl"
            className={cn(comfortaa.variable, bryant.variable, changa.variable)}
        >
            <body className={cn("bg-background font-changa grid grid-cols-1")}>
                <Header />
                <main className="min-h-dvh pt-[--header-height] [&>*]:h-full">{children}</main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}

export default RootLayout;
