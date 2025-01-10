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
          <img
            src={images?.[0]?.url}
            className={styles["list-item-album-image"]}
            alt="album"
          />
        </div>
        {name && <div className={styles["list-item-title"]}>{name}</div>}
        {description && (
          <div className={styles["list-item-description"]}>{description}</div>
        )}
      </Link>
    </li>
  );
}
