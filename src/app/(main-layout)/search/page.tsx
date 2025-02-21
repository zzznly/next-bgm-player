import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import ListSection from "@/components/list-section/ListSection";
import SearchSectionCategories from "@/components/pages/search/search-section-categories/SearchSectionCategories";
import SearchSectionCurrentPlaylists from "@/components/pages/search/search-section-current-playlists/SearchSectionCurrentPlaylists";
import ListItem from "@/components/list-item/ListItem";
import PlaylistService from "@/service/playlist/PlaylistService";

const cx = classNames.bind(styles);

export default async function SearchMainPage() {
  const data = await PlaylistService.getNewReleaseAlbums();
  return (
    <div className={cx("search-main")}>
      <ListSection title="New Release">
        {(data as NewReleaseAlbumsResponse)?.albums?.items
          ?.sort(() => Math.random() - 0.5)
          .slice(0, 10)
          .map((item: NewReleaseAlbumItem, idx: number) => (
            <ListItem
              key={idx}
              {...{
                name: item?.name,
                images: item?.images,
                description: item?.artists[0].name,
                uri: item?.uri,
                type: item?.type,
              }}
            />
          ))}
      </ListSection>
      <div className={cx("search-main-row")}>
        <SearchSectionCurrentPlaylists />
        <SearchSectionCategories />
      </div>
    </div>
  );
}
