"use client";
import TrackItem from "@/components/track-item/TrackItem";
import { queryOptions } from "@/service/search/queries";
import SearchService from "@/service/search/SearchService";
import { useInfiniteSearchResult } from "@/service/search/useSearchService";
import { getDehydratedQuery } from "@/utils/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

export default function SearchSectionResultTracks() {
  const { keyword, category } = useParams();
  const [offset, setOffset] = useState(0);

  const {
    data,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
    // isFetchingNextPage,
    // isFetchingPreviousPage,
    // promise,
    // ...result
  } = useInfiniteSearchResult({ q: keyword, type: "track", offset });

  console.log(87878, data);
  const onClickFetch = async () => {
    setOffset(offset + 20);
    await fetchNextPage();
  };

  return (
    <div className={cx("search-section", "result")}>
      <button onClick={onClickFetch}>fetch!!!</button>
      {/* {pages?.items?.map((item: any, idx: number) => (
        <TrackItem
          id={item?.id}
          imgUrl={item?.album?.images[0]?.url}
          name={item?.name}
          artist={item?.artists[0]?.name}
          album={item?.album?.name}
          durationTime={item?.duration_ms}
          uri={item.uri}
          key={`track-${idx}`}
        />
      ))} */}
    </div>
  );
}
