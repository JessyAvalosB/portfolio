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
            className={`${className} ${getTypographyClass(variant)} select-none transition-all duration-300`}>
            {children}
        </Component>
    )
}
