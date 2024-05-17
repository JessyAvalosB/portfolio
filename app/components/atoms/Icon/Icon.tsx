import Image from "next/image";
import { IconProps, getIconSize } from "./IconTypes";

export const Icon = ({ icon, onClick, size = 'sm', className = '' }: IconProps) => {
    return (
        <Image
            src={icon}
            width={getIconSize(size)}
            height={getIconSize(size)}
            alt={icon.src}
            onClick={onClick}
            className={className} />
    )
}
