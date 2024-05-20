import { IconsEnum } from "@/app/components/atoms/Icon/IconTypes";

type IconSide = 'left' | 'right';

export interface TextIconProps {
    text: string;
    icon: IconsEnum;
    iconSide?: IconSide;
    className?: string;
}

export const setIconSide = (side: IconSide) => side === 'left'? 'order-first' : 'order-last';
