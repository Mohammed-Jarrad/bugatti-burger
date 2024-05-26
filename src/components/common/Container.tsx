import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
    return <div className={cn("container", className)} {...props} />;
};

export default Container;
