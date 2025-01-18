import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import ListSection from "@/components/list-section/ListSection";
import PlaylistService from "@/service/playlist/PlaylistService";
import SearchSectionCategories from "@/components/pages/search/search-section-categories/SearchSectionCategories";
import SearchSectionCurrentPlaylists from "@/components/pages/search/search-section-current-playlists/SearchSectionCurrentPlaylists";
import { getDehydratedQueries, Hydrate } from "@/utils/react-query";
import { queryOptions } from "@/service/search/queries";

const cx = classNames.bind(styles);

export default async function SearchMainPage() {
  const data = await PlaylistService.getNewReleaseAlbums();
  return (
    <>
      <div className={cx("search-main")}>
        <ListSection
          title="New Release"
          items={(data as NewReleaseAlbumsResponse)?.albums?.items
            ?.sort(() => Math.random() - 0.5)
            .slice(0, 10)
            .map(
              ({ name, images, uri, type, artists }: NewReleaseAlbumItem) => ({
                uri,
                type,
                images,
                name,
                description: artists[0].name,
              })
            )}
        />
        <div className={cx("search-main-row")}>
          <SearchSectionCurrentPlaylists />
          <SearchSectionCategories />
        </div>
      </div>
      {/* <Hydrate state={{ queries: [query] }}></Hydrate> */}
    </>
  );
}
