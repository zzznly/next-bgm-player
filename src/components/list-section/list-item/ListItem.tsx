import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ListItemProps } from "../ListSection";

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
            src={images?.[0]?.url}
            width={images?.[0]?.width || 50}
            height={images?.[0]?.height || 50}
            alt="album"
            className={styles["list-item-album-image"]}
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
