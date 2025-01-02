import { queryOptions } from "@/service/playlist/queries";
import { getDehydratedQuery } from "@/utils/react-query";
import styles from "./page.module.scss";

export default async function Discover() {
  const { queryKey, queryFn } = queryOptions.newReleaseAlbums();
  const {
    state: { data: newReleaseAlbums },
  } = await getDehydratedQuery({
    queryKey,
    queryFn,
  });

  const getRandomContents = (arr: NewReleaseAlbumItem[] | any[]) => {
    return arr?.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  return (
    <div className={styles["discover-page"]}>
      <h2 className={styles["discover-page-title"]}>Discover</h2>
      <div className={styles["discover-page-content"]}>
        <div className={styles["section"]}>
          <div className={styles["section-head"]}>
            <h2 className={styles["section-title"]}>New Release</h2>
            {/* <a className={styles["link-more"]}>View All</a> */}
          </div>
          <div className={styles["section-content"]}>
            {getRandomContents(newReleaseAlbums?.albums?.items || [])?.map(
              (item: NewReleaseAlbumItem) => (
                <div
                  className={styles["section-item"]}
                  style={{
                    backgroundImage: `url(${item?.images[0].url}), linear-gradient(to top, rgba(77, 77, 86, 0.231372549), rgba(77, 77, 86, 0))`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                  }}
                  // onClick={() => setPlayingURL(item.uri)}
                >
                  <p className={styles["section-item-name"]}>{item?.name}</p>
                  <p className={styles["section-item-artist"]}>
                    {item?.artists[0].name}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* {categoryItems.map((item: CategoriesItem) => (
          <HomeSection key={item.id} {...item} />
        ))} */}
      </div>
    </div>
  );
}
