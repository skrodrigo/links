interface ButtonProps {
    text: string;
    url: string;
}

export function Button({ text, url }: ButtonProps) {
    return (
        <a href={url} target="_blank">
            <div className="flex items-center justify-center border-solid border-2 border-white w-[320px] md:w-[700px] h-10 md:h-12 rounded-full">
                <span className="text-white font-normal text-sm">{text}</span>
            </div>
        </a>
    )
}
