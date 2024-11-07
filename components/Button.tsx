import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function Button({
    className,
    ...restProps
}: PrismicNextLinkProps) {
    return(
        <PrismicNextLink
         className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-300 text-white font-bold py-3 px-12 rounded-full text-white font-nunito-sans tracking-wide text-base mb-8 md:mb-10", className)} {...restProps} 
        />
    );
}