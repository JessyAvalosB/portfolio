import { ReactNode } from "react";

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonVariants = 'primary' | 'secondary' | 'primaryOutline' | 'secondaryOutline';

interface ButtonPops {
    children: ReactNode;
    onClick: () => void;
    type?: ButtonTypes;
    disabled?: boolean;
    ariaLabel?: string;
    variant?: ButtonVariants;
}

export const Button = ({ children, type = 'button', onClick, disabled = false, ariaLabel = '', variant = 'primary' }: ButtonPops) => {
    const getButtonVariantClass = () => {
        switch (variant) {
            case 'primaryOutline':
                return 'text-primary font-bold border-2 border-primary enabled:hover:bg-blue-500 enabled:active:bg-blue-600 enabled:hover:text-text-color';
            case 'secondary':
                return 'bg-secondary font-normal text-sm text-text-color enabled:hover:bg-brown-600 enabled:active:bg-brown-700';
            case 'secondaryOutline':
                return 'text-secondary font-bold border-2 border-secondary enabled:hover:bg-brown-500 enabled:active:bg-brown-600 enabled:hover:text-text-color';
            case 'primary':
            default:
                return 'bg-primary font-normal text-sm text-text-color enabled:hover:bg-blue-600 enabled:active:bg-blue-700';
        }
    }
    return (
        <button
            className={`flex py-2 px-4 rounded-2xl disabled:opacity-50 ${getButtonVariantClass()}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}>
            {children}
        </button>
    )
}
