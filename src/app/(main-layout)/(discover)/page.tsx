import styles from "./styles.module.scss";
import Link from "next/link";
import ListSection from "@/components/list-section/ListSection";
import PlaylistService from "@/service/playlist/PlaylistService";

export default async function DiscoverPage() {
  return (
    <div className={styles["discover-page"]}>
      <h2 className={styles["discover-page-title"]}>Discover</h2>
      <div className={styles["discover-page-content"]}>
        <NewReleaseSection />
        <PlaylistSection />
      </div>
    </div>
  );
}

async function NewReleaseSection() {
  const data = await PlaylistService.getNewReleaseAlbums();
  const getRandomContents = (arr: NewReleaseAlbumItem[] & any[]) => {
    return arr?.sort(() => 0.5 - Math.random()).slice(0, 5);
  };

  return (
    <div className={styles["section"]}>
      <div className={styles["section-head"]}>
        <h2 className={styles["section-title"]}>New Release</h2>
      </div>
      <div className={styles["section-content"]}>
        {getRandomContents(
          (data as NewReleaseAlbumsResponse)?.albums?.items
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
  );
}

async function PlaylistSection() {
  const data = await PlaylistService.getCurrentPlaylists();

  return (
    <>
      <ListSection title="Playlist You Need" items={data.items} />
    </>
  );
}
