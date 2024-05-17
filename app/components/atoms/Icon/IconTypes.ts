export type IconSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface IconProps {
    icon: IIcon;
    size?: IconSizes;
    onClick?: () => void;
    className?: string;
}

export interface IIcon {
    src: string;
    blurDataURL: string;
    height: number;
    width: number;
}

export interface IIcons {
    [key: string]: IIcon;
}

export const getIconSize = (size: IconSizes) => {
    switch (size) {
        case "xs":
            return 16;
        case "sm":
            return 24;
        case "md":
            return 32;
        case "lg":
            return 64;
    }
}
