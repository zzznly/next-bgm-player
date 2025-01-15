import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-section/list-item/ListItem";
import CategoryService from "@/service/category/CategoryService";
import PlaylistService from "@/service/playlist/PlaylistService";
import { getDehydratedQueries, Hydrate } from "@/utils/react-query";
import { queryOptions } from "@/service/search/queries";

const cx = classNames.bind(styles);

export default function SearchPage({
  children,
}: {
  children: React.ReactNode;
}) {
  // const query = getDehydratedQueries([
  //   queryOptions.getSearchResult({ q: "", type: "album" }),
  // ]);

  return (
    <>
      {/* <Hydrate state={{ queries: [query] }}> */}
      <SearchMain />
      {children}
      {/* </Hydrate> */}
    </>
  );
}

async function SearchMain() {
  const data = await PlaylistService.getNewReleaseAlbums();

  return (
    <div className={styles["search-main"]}>
      <ListSection
        title="New Release"
        items={(data as NewReleaseAlbumsResponse)?.albums?.items
          ?.sort(() => Math.random() - 0.5)
          .slice(0, 10)
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
  const data = await PlaylistService.getCurrentPlaylists();

  return (
    <div className={cx("search-main-section", "current-playlists")}>
      <div className={styles["section"]}>
        <div className={styles["section-wrap"]}>
          <div className={styles["list"]}>
            <h2 className={styles["list-title"]}>Current Playlists</h2>
            <div className={styles["list-content"]}>
              {data?.items
                ?.reverse()
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
