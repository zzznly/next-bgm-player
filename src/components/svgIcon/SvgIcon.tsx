import Image from "next/image";

interface IconProps {
    name: string | undefined;
    category?: string;
    width?: number;
    height?: number;
}

export default function SvgIcon({ name, width = 16, height = 16 }: IconProps) {
    return (
        <>
            <Image
                src={`/ico-${name}.svg`}
                alt={`icon-${name}`}
                width={width}
                height={height}
            />
        </>
    );
}
