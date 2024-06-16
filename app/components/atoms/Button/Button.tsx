import { ButtonPops, getButtonVariantClass } from "./ButtonTypes";

export const Button = ({
    onClick,
    children,
    ariaLabel = '',
    type = 'button',
    disabled = false,
    variant = 'primary',
    className = '',
}: ButtonPops) => {

    return (
        <button
            className={`flex py-2 px-4 rounded-2xl hover:transition-all ease-in-out disabled:opacity-50  ${getButtonVariantClass(variant)} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}>
            {children}
        </button>
    )
}
