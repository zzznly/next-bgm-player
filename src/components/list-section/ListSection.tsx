import Link from "next/link";
import styles from "./styles.module.scss";
import ListItem from "./list-item/ListItem";

export interface ListSectionProps {
  title?: string;
  items: PlaylistItem[] | any[];
  hasShowMore?: boolean;
}

export interface ListItemProps {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  uri?: string;
  images: { url: string; width: number; height: number }[];
  type?: string;
}

export default function ListSection({
  hasShowMore = false,
  items,
  title,
}: ListSectionProps) {
  return (
    <div className={styles["section"]}>
      <ul className={styles["section-wrap"]}>
        <div className={styles["list"]}>
          <div className={styles["list-head"]}>
            <h2 className={styles["list-title"]}>{title}</h2>
            {hasShowMore && (
              <Link className={styles["list-link-more"]} href="/">
                See All
              </Link>
            )}
          </div>
          <div className={styles["list-content"]}>
            {items?.map((item: ListItemProps) => (
              <ListItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
}
