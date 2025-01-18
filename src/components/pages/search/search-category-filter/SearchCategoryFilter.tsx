"use client";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { useParams } from "next/navigation";

const cx = classNames.bind(styles);

type SearchCategoryKey = "ALL" | "TRACK" | "PLAYLIST" | "ARTIST" | "ALBUM";
type SearchCategoryValue = {
  label: string;
  params: string;
  path: string;
};

export default function SearchCategoryFilter() {
  const CATEGORY: Record<SearchCategoryKey, SearchCategoryValue> = {
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
  
  const { keyword, category } = useParams();

  return (
    <div className={styles["search-result-filter"]}>
      {Object.entries(CATEGORY).map(([key, { path, label }]) => (
        <Link
          key={`filter-${key}`}
          href={`/search/${keyword}${path && `/${path}`}`}
          className={cx(
            "search-result-filter-link",
            `${(category?.[0] ?? "") === path ? "active" : ""}`
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
