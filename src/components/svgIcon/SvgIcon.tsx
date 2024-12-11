import Image from "next/image";

interface IconProps {
    name: string | undefined;
    category?: string;
    width?: number;
    height?: number;
}

export default function SvgIcon({ name = "favorites", width = 20, height = 20 }: IconProps) {
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
