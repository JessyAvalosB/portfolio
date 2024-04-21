import { ReactNode } from "react";

interface ButtonPops {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    disabled?: boolean;
    ariaLabel?: string;
}

const Button = ({ children, type = 'button', onClick, disabled = false, ariaLabel = '' }: ButtonPops) => {
    return (
        <button
            className="flex"
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}>
            {children}
        </button>
    )
}

export default Button;
