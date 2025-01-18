import Link from "next/link";
import styles from "./styles.module.scss";
import ListItem, { ListItemProps } from "../list-item/ListItem";

export interface ListSectionProps {
  title?: string;
  hasShowMore?: boolean;
  showMoreLink?: string;
  children?: React.ReactNode;
}

export default function ListSection({
  title,
  hasShowMore = false,
  showMoreLink = "",
  children,
}: ListSectionProps) {
  return (
    <div className={styles["section"]}>
      <ul className={styles["section-wrap"]}>
        <div className={styles["list"]}>
          <div className={styles["list-head"]}>
            <h2 className={styles["list-title"]}>{title}</h2>
            {hasShowMore && (
              <Link className={styles["list-link-more"]} href={showMoreLink}>
                See All
              </Link>
            )}
          </div>
          <div className={styles["list-content"]}>{children}</div>
        </div>
      </ul>
    </div>
  );
}
