import styles from "./styles.module.scss";
import { getDehydratedQuery } from "@/utils/react-query";
import MainLayout from "../(.)(discover)/layout";
import { queryOptions } from "@/service/playlist/queries";
import Link from "next/link";

export default async function Explorer() {
  const { queryKey, queryFn } = queryOptions.newReleaseAlbums();
  const query = await getDehydratedQuery({
    queryKey,
    queryFn,
  });

  const getRandomContents = (arr: NewReleaseAlbumItem[] | any[]) => {
    return arr?.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  return (
    <MainLayout>
      <div className={styles["explorer-page"]}>
        <h2 className={styles["explorer-page-title"]}>Explorer</h2>
        <div className={styles["explorer-page-content"]}>
          <div className={styles["section"]}>
            <div className={styles["section-head"]}>
              <h2 className={styles["section-title"]}>New Release</h2>
              <Link href="/" className={styles["section-link-more"]}>View All</Link>
            </div>
            <div className={styles["section-content"]}>
              {getRandomContents(query?.state?.data?.albums?.items || [])?.map(
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
    </MainLayout>
  );
}
