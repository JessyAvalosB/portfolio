import xTwitter from '@/public/icons/x-twitter.svg';
export type filter = 'white' | 'black' | 'gray' | 'blue' | 'brown' | 'purple';
export type IconSizes = 'xs' | 'sm' | 'md' | 'lg';
export type IconsListType = {
    [key in IconsEnum]: IIcon;
}

export enum IconsEnum {
    androidSttudio = 'androidSttudio',
    apache = 'apache',
    bitbucket = 'bitbucket',
    bootstrap = 'bootstrap',
    briefCase = 'briefCase',
    check = 'check',
    close = 'close',
    composer = 'composer',
    confluence = 'confluence',
    css3 = 'css3',
    cypress = 'cypress',
    eslint = 'eslint',
    express = 'express',
    facebook = 'facebook',
    figma = 'figma',
    fireBase = 'fireBase',
    gear = 'gear',
    ggcloud = 'ggcloud',
    git = 'git',
    github = 'github',
    home = 'home',
    html5 = 'html5',
    instagram = 'instagram',
    java = 'java',
    javascript = 'javascript',
    jenkins = 'jenkins',
    jira = 'jira',
    laravel = 'laravel',
    linkedin = 'linkedin',
    mail = 'mail',
    mailBox = 'mailBox',
    medium = 'medium',
    menu = 'menu',
    mongodb = 'mongodb',
    moon = 'moon',
    mui = 'mui',
    mysql = 'mysql',
    nextjs = 'nextjs',
    nodejs = 'nodejs',
    noteBook = 'noteBook',
    npm = 'npm',
    phone = 'phone',
    postgresql = 'postgresql',
    postman = 'postman',
    react = 'react',
    redux = 'redux',
    sass = 'sass',
    slack = 'slack',
    sqlite = 'sqlite',
    storybook = 'storybook',
    sun = 'sun',
    tailwindcss = 'tailwindcss',
    typescript = 'typescript',
    up = 'up',
    user = 'user',
    vitejs = 'vitejs',
    vscode = 'vscode',
    vuejs = 'vuejs',
    xTwitter = 'xTwitter',
}

export const iconFilters: Record<filter, string> = {
    white: 'filter invert-[99%] sepia-[3%] saturate-[15%] hue-rotate-[194deg] brightness-[113%] contrast-[90%]',
    black: 'filter invert-[0%] sepia-[9%] saturate-[286%] hue-rotate-[339deg] brightness-[91%] contrast-[82%]',
    blue: 'filter invert-[20%] sepia-[14%] saturate-[7237%] hue-rotate-[173deg] brightness-[99%] contrast-[102%]',
    brown: 'filter invert-[15%] sepia-[53%] saturate-[3447%] hue-rotate-[17deg] brightness-[97%] contrast-[105%]',
    purple: 'filter invert-[13%] sepia-[26%] saturate-[7481%] hue-rotate-[299deg] brightness-[95%] contrast-[117%]',
    gray: 'filter invert-[15%] sepia-[0%] saturate-[1131%] hue-rotate-[136deg] brightness-[106%] contrast-[87%]',
}

export interface IconProps {
    icon: IconsEnum;
    size?: IconSizes;
    color?: filter;
    onClick?: () => void;
    className?: string;
}

export interface IIcon {
    src: string;
    blurDataURL: string;
    height: number;
    width: number;
}

export const getIconSize = (size: IconSizes): number => {
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
