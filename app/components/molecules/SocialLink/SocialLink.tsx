import Link from "next/link"
import { TextIcon } from '@/components';
import { IconsEnum } from "../../atoms/Icon/IconTypes";
import { SocialLinkProps, socialLinkList } from "./SocialLinkTypes";

export const SocialLink = ({ icon }: SocialLinkProps) => {
    const { href, label } = socialLinkList[icon]
    return (
        <Link href={href} target="_blank">
            <TextIcon
                icon={IconsEnum[icon]}
                text={label}
                iconSide='left' />
        </Link>
    )
}
