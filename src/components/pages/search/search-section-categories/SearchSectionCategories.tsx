import CategoryService from "@/service/category/CategoryService";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function SearchSectionCategories() {
  const data = await CategoryService.getCategories();

  const CATEGORY_BG_COLORS = [
    "#E67588",
    "#68CDE4",
    "#C275E6",
    "#E2A65F",
    "#C8E25F",
    "#8C75E6",
    "#E67575",
    "#999999",
    "#81E468",
  ];

  return (
    <div className={cx("search-section", "categories")}>
      <div className={cx("section")}>
        <div className={cx("section-wrap")}>
          <div className={cx("list")}>
            <h2 className={cx("list-title")}>Hot Categories</h2>
            <div className={cx("list-content")}>
              {data?.categories?.items
                ?.sort(() => Math.random() - 0.5)
                .map(({ name }: CategoriesItem, idx: number) => (
                  <button
                    style={{
                      backgroundColor:
                        CATEGORY_BG_COLORS[idx % CATEGORY_BG_COLORS.length],
                    }}
                    className={cx("category")}
                    key={`category-${idx}`}
                  >
                    {name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
