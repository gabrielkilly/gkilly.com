import Link from "next/link"

interface ButtonProps {
    text: string, //text on button
    icon?: string, //path stating from /icons as root
    href: string, //url path
    hrefTarget?: string,
    type?: ButtonType
}

export enum ButtonType {
    primary = "primary",
    secondary = "secondary"
}

export default function Button({ text, icon, href, hrefTarget, type }: ButtonProps) {
    return (
        <Link href={href} target={hrefTarget}>
            <button className={type ?? ButtonType.primary}>
                    { text } 
                    <img src={`/icons/${icon}.svg`} />
            </button>
        </Link>
    )
    
}