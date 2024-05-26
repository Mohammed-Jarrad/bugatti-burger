import { Changa, Comfortaa } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
export const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-comfortaa",
    display: "swap",
});

export const changa = Changa({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-changa",
    display: "swap",
})

// Local Fonts
export const bryant = localFont({
    src: [
        {
            path: "./BryantPro-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./BryantPro-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./BryantPro-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./BryantPro-RegularItalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./BryantPro-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./BryantPro-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./BryantPro-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./BryantPro-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-bryant",
    display: "swap",
});
