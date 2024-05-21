export enum SocialLinkEnum {
    facebook = 'facebook',
    xTwitter = 'xTwitter',
    instagram = 'instagram',
    medium = 'medium',
    linkedin = 'linkedin',
    github = 'github',
}

export const socialLinkList: SocialLinkList = {
    facebook: {
        href: 'https://web.facebook.com/JessyAvalosB',
        label: 'JessyAvalosB'
    },
    instagram: {
        href: 'https://www.instagram.com/jessyavalosb',
        label: 'JessyAvalosB'
    },
    xTwitter: {
        href: 'https://x.com/JessyAvalosB',
        label: '@JessyAvalosB'
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/jessyavalosb/',
        label: 'JessyAvalosB'
    },
    github: {
        href: 'https://github.com/JessyAvalosB',
        label: 'JessyAvalosB'
    },
    medium: {
        href: 'https://medium.com/@JessyAvalosB',
        label: 'JessyAvalosB'
    }
}

type SocialLinkList = { 
    [key in SocialLinkEnum]: SocialLink;
}

export interface SocialLinkProps {
    icon: SocialLinkEnum;
}

interface SocialLink {
    href: string;
    label: string;
}
