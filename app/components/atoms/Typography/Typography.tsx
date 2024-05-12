import {
    TypographyPops,
    getTypographyClass,
    getTypographyVariants,
} from "./TypographyTypes"

export const Typography = ({
    children,
    variant = 'p',
    color = 'inherit',
}: TypographyPops) => {
    const Component = getTypographyVariants(variant);
    return (
        <Component
            style={{ color }}
            className={`${getTypographyClass(variant)}`}>
            {children}
        </Component>
    )
}
