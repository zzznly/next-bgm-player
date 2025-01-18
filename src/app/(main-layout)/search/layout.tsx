import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx("search-page")}>
      <h2 className={cx("search-page-title")}>Search</h2>
      <div className={cx("search-page-content")}>{children}</div>
    </div>
  );
}
