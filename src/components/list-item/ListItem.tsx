import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export interface ListItemProps {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  uri?: string;
  images: { url: string; width: number; height: number }[];
  type?: string;
}

export default function ListItem({
  id,
  images,
  name,
  uri,
  description,
  type,
}: ListItemProps) {
  return (
    <li className={styles["list-item"]}>
      <Link className={styles["list-item-link"]} href={`/${type}/${id}`}>
        <div className={styles["list-item-album"]}>
          <Image
            src={
              images?.[0]?.url || "https://dummyimage.com/145x145/ccc/fff.png"
            }
            width={images?.[0]?.width || 145}
            height={images?.[0]?.height || 145}
            alt="album"
            className={styles["list-item-album-image"]}
          />
        </div>
        <div className={styles["list-item-title"]}>{name || "undefined"}</div>
        <div className={styles["list-item-description"]}>
          {description || "undefined"}
        </div>
      </Link>
    </li>
  );
}
