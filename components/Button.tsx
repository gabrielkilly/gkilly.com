
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
        <a href={href} target={hrefTarget}>
            <button className={type ?? ButtonType.primary}>
                    { text } 
                    <img src={`/icons/${icon}.svg`} />
            </button>
        </a>
    )
    
}