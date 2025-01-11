import styles from "./page.module.scss";
import Link from "next/link";
import ListSection from "@/components/list-section/ListSection";
import PlaylistService from "@/service/playlist/PlaylistService";

export default async function Discover() {
  const [newReleasedAlbumsData, currentPlaylistsData] = await Promise.all([
    PlaylistService.getNewReleaseAlbums(),
    PlaylistService.getCurrentPlaylists(),
  ]);

  const getRandomContents = (arr: NewReleaseAlbumItem[] & any[]) => {
    return arr?.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  return (
    <div className={styles["explorer-page"]}>
      <h2 className={styles["explorer-page-title"]}>Discover</h2>
      <div className={styles["explorer-page-content"]}>
        <div className={styles["section"]}>
          <div className={styles["section-head"]}>
            <h2 className={styles["section-title"]}>New Release</h2>
            <Link href="/" className={styles["section-link-more"]}>
              View All
            </Link>
          </div>
          <div className={styles["section-content"]}>
            {getRandomContents(
              (newReleasedAlbumsData as NewReleaseAlbumsResponse)?.albums?.items
            )?.map((item: NewReleaseAlbumItem, idx: number) => (
              <Link
                className={styles["section-item"]}
                style={{
                  backgroundImage: `url(${item?.images[0].url}), linear-gradient(to top, rgba(77, 77, 86, 0.231372549), rgba(77, 77, 86, 0))`,
                  backgroundSize: "cover",
                  backgroundBlendMode: "multiply",
                }}
                href={`/${item.type}/${item.id}`}
                key={`item-${idx}`}
              >
                <p className={styles["section-item-name"]}>{item?.name}</p>
                <p className={styles["section-item-artist"]}>
                  {item?.artists[0].name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles["section"]}>
          <ListSection
            title="Playlist You Need"
            items={currentPlaylistsData.items}
          />
        </div>
      </div>
    </div>
  );
}
