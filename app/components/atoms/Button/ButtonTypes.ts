import { ReactNode } from "react";

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonVariants = 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline' | 'primaryGhost' | 'secondaryGhost';

export interface ButtonPops {
    children: ReactNode;
    onClick: () => void;
    type?: ButtonTypes;
    disabled?: boolean;
    ariaLabel?: string;
    variant?: ButtonVariants;
    className?: string;
}

export const getButtonVariantClass = (variant: ButtonVariants) => {
    switch (variant) {
        case 'primaryOutline':
            return 'text-primary font-bold border-2 border-primary enabled:hover:bg-blue-500 enabled:active:bg-blue-600 enabled:hover:text-text-color';
        case 'secondary':
            return 'bg-secondary font-normal text-sm text-text-color enabled:hover:bg-brown-600 enabled:active:bg-brown-700';
        case 'secondaryOutline':
            return 'text-secondary font-bold border-2 border-secondary enabled:hover:bg-brown-500 enabled:active:bg-brown-600 enabled:hover:text-text-color';
        case 'primaryGhost':
            return 'font-bold enabled:hover:bg-black enabled:hover:text-text-color-dark enabled:hover:dark:bg-white enabled:hover:dark:text-text-color';
        case 'secondaryGhost':
            return 'text-secondary font-bold enabled:hover:text-brown-600 enabled:active:text-brown-700';
        case 'primary':
        default:
            return 'bg-primary font-normal text-sm text-text-color enabled:hover:bg-blue-600 enabled:active:bg-blue-700';
    }
}
