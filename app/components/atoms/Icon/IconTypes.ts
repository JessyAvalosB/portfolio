import xTwitter from '@/public/icons/x-twitter.svg';
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
    tailwindcss = 'tailwindcss',
    typescript = 'typescript',
    up = 'up',
    user = 'user',
    vitejs = 'vitejs',
    vscode = 'vscode',
    vuejs = 'vuejs',
    xTwitter = 'xTwitter',
}

export interface IconProps {
    icon: IconsEnum;
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
