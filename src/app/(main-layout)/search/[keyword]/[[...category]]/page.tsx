import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

type Category = "ALL" | "TRACK" | "PLAYLIST" | "ARTIST" | "ALBUM";
type CategoryInfo = {
  label: string;
  params: string;
  path: string;
};

type Params = {
  keyword: string;
  category?: string;
};

export default async function SearcResultPage({ params }: { params: Params }) {
  const { keyword, category } = await params;

  //   const searchParams: any = {
  //     q: params.keyword ?? "",
  //     type: (
  //       Object.values(CATEGORY).find(({ path }) => path === params.category) ??
  //       CATEGORY.ALL
  //     ).params,
  //   };
  //   const { data } = useSearchResult(searchParams, {
  //     enabled: !!params.keyword,
  //   });

  return (
    <>
      <div className={styles["search-result"]}>
        <SearchResultFilter {...{ keyword, category }} />
        <h3>Search Result: {keyword}</h3>
        <div className={styles["search-result-content"]}>
          {/* {data ? <Outlet context={data} /> : <>no data</>} */}
          {category}
        </div>
      </div>
    </>
  );
}

function SearchResultFilter({ keyword, category }: Params) {
  const CATEGORY: Record<Category, CategoryInfo> = {
    ALL: {
      label: "모두",
      params: "track,playlist,artist,album",
      path: "",
    },
    TRACK: {
      label: "곡",
      params: "track",
      path: "tracks",
    },
    PLAYLIST: {
      label: "플레이리스트",
      params: "playlist",
      path: "playlists",
    },
    ARTIST: {
      label: "아티스트",
      params: "artist",
      path: "artists",
    },
    ALBUM: {
      label: "앨범",
      params: "album",
      path: "albums",
    },
  } as const;

  return (
    <div className={styles["search-result-filter"]}>
      {Object.entries(CATEGORY).map(([key, { path, label }]) => (
        <Link
          key={`filter-${key}`}
          href={`/search/${keyword}${path && `/${path}`}`}
          className={cx(
            "search-result-filter-link",
            category === path ? "active" : ""
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
