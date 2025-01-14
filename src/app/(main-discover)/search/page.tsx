import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ListSection from "@/components/list-section/ListSection";
import CategoryService from "@/service/category/CategoryService";
import PlaylistService from "@/service/playlist/PlaylistService";
import ListItem from "@/components/list-section/list-item/ListItem";

export default function SearchPage() {
  return (
    <div className={styles["search-page"]}>
      <h2 className={styles["search-page-title"]}>Search</h2>
      <div className={styles["search-page-content"]}>
        <SearchMain />
      </div>
    </div>
  );
}

async function SearchMain() {
  const data = await PlaylistService.getNewReleaseAlbums();

  return (
    <div className={styles["search-main"]}>
      <ListSection
        title="New Release"
        items={(data as NewReleaseAlbumsResponse)?.albums?.items
          ?.slice(0, 10)
          .map(({ name, images, uri, type, artists }: NewReleaseAlbumItem) => ({
            uri,
            type,
            images,
            name,
            description: artists[0].name,
          }))}
      />
      <div className={styles["search-main-row"]}>
        <CurrentPlaylistsSection />
        <CategoriesSection />
      </div>
    </div>
  );
}

async function CurrentPlaylistsSection() {
  const cx = classNames.bind(styles);
  const data = await PlaylistService.getCurrentPlaylists();

  return (
    <div className={cx("search-main-section", "current-playlists")}>
      <div className={styles["section"]}>
        <div className={styles["section-wrap"]}>
          <div className={styles["list"]}>
            <h2 className={styles["list-title"]}>Current Playlists</h2>
            <div className={styles["list-content"]}>
              {data?.items
                ?.sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map(
                  ({ name, description, uri, type, images }: PlaylistItem) => (
                    <ListItem
                      key={uri}
                      uri={uri}
                      type={type}
                      images={images}
                      name={name}
                      description={description}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function CategoriesSection() {
  const cx = classNames.bind(styles);
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
    <div className={cx("search-main-section", "categories")}>
      <div className={styles["section"]}>
        <div className={styles["section-wrap"]}>
          <div className={styles["list"]}>
            <h2 className={styles["list-title"]}>Hot Categories</h2>
            <div className={styles["list-content"]}>
              {data?.categories?.items
                ?.sort(() => Math.random() - 0.5)
                .map(({ name }: CategoriesItem, idx: number) => (
                  <button
                    style={{
                      backgroundColor:
                        CATEGORY_BG_COLORS[idx % CATEGORY_BG_COLORS.length],
                    }}
                    className={styles["category"]}
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
