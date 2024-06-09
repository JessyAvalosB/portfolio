import { ReactNode } from "react";

type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body2' | 'small' | 'inputLabel' | 'link' | 'navLink' | 'p' | 'span';

export interface TypographyPops {
    children: ReactNode;
    variant?: TypographyVariants;
    className?: string;
}

const typographyClasses = {
    h1: 'text-6xl font-bold leading-none',
    h2: 'text-5xl font-bold',
    h3: 'text-4xl font-bold',
    h4: 'text-3xl font-bold',
    h5: 'text-2xl font-bold leading-tight',
    h6: 'text-xl font-bold',
    body: 'text-lg font-normal',
    body2: 'text-base font-normal',
    small: 'text-sm font-normal',
    inputLabel: 'text-base font-semibold',
    link: 'text-lg font-normal hover:underline hover:cursor-pointer',
    navLink: 'text-lg font-bold hover:text-blue-700 active:text-blue-500 hover:cursor-pointer',
    default: 'text-sm font-normal',
}

const typographyVariants: { [key in TypographyVariants]: string } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    body2: 'p',
    inputLabel: 'p',
    link: 'p',
    navLink: 'p',
    p: 'p',
    span: 'span',
    small: 'span',
}

export const getTypographyVariants = (variant: TypographyVariants) => typographyVariants[variant];

export const getTypographyClass = (variant: TypographyVariants) => {
    if (variant === 'p' || variant === 'span') {
        return typographyClasses.default;
    } else {
        return typographyClasses[variant]
    }
}
