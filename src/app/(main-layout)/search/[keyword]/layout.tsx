import SearchCategoryFilter from "@/components/pages/search/search-category-filter/SearchCategoryFilter";
import styles from "./layout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx("search-result")}>
      <SearchCategoryFilter />
      <div className={cx("search-result-content")}>{children}</div>
    </div>
  );
}
