import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import PlaylistService from "@/service/playlist/PlaylistService";
import ListItem from "@/components/list-item/ListItem";

const cx = classNames.bind(styles);

export default async function SearchSectionCurrentPlaylists() {
  const data = await PlaylistService.getCurrentPlaylists();

  return (
    <div className={cx("search-section", "current-playlists")}>
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
