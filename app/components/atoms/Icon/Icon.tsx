import Image from "next/image";

import { Icons } from "./Icons";
import { IconProps, getIconSize, iconFilters } from "./IconTypes";

export const Icon = ({ icon, onClick, color = 'none', size = 'sm', className = '' }: IconProps) => {
    return (
        <Image
            src={Icons[icon]}
            width={getIconSize(size)}
            height={getIconSize(size)}
            alt={icon}
            onClick={onClick}
            className={`select-none ${className} ${iconFilters[color]}`} />
    )
}
