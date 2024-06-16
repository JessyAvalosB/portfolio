import {
    TypographyPops,
    getTypographyClass,
    getTypographyVariants,
} from "./TypographyTypes"

export const Typography = ({
    children,
    variant = 'p',
    className = '',
}: TypographyPops) => {
    const Component = getTypographyVariants(variant);
    return (
        <Component
            className={`text-text-color dark:text-text-color-dark ${className} ${getTypographyClass(variant)} select-none transition-all duration-300`}>
            {children}
        </Component>
    )
}
