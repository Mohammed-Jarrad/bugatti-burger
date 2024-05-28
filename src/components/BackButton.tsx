import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
    const router = useRouter();

    function back() {
        router.back();
    }

    return (
        <button
            title="رجوع"
            className="border border-primary rounded-full p-2 hover:bg-primary hover:text-white transition-all"
            onClick={back}
        >
            <BiArrowBack size={20} className="-scale-x-100" />
        </button>
    );
};

export default BackButton;
