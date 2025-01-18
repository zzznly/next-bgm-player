import styles from "./styles.module.scss";
import classNames from "classnames/bind";
// import { useParams, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
import Image from "next/image";
import { getDehydratedQueries } from "@/utils/react-query";
import { queryOptions } from "@/service/search/queries";
import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-section/list-item/ListItem";
import TrackListItem from "@/components/track-list-item/TrackListItem";

const cx = classNames.bind(styles);

export default async function SearchResultPage({
  params,
}: {
  params: { keyword: string; category: string };
}) {
  const { keyword, category } = await params;
  const type = (category?.[0] as string)?.slice(0, -1) ?? "all";
  const query = await getDehydratedQueries([
    queryOptions.getSearchResult({
      q: keyword,
      type: type !== "all" ? type : "album,artist,playlist,track",
    }),
  ]);
  const data = query?.[0]?.state?.data;
  console.log(777, data?.tracks?.items);

  const list: Record<string, React.ReactNode> = {
    all: (
      <>
        <div className={cx("search-category-result", "all")}>
          <div className={cx("search-category-result-wrap")}>
            <div className={cx("search-category-result-section", "top-result")}>
              <div
                className={cx(
                  "search-category-result-card",
                  data?.artists?.items[0]?.type === "artists" && "artists"
                )}
              >
                <div className={cx("search-category-result-card-image")}>
                  <Image
                    src={data?.artists?.items[0]?.images[0]?.url}
                    alt=""
                    width={120}
                    height={120}
                  />
                </div>
                <h2 className={cx("search-category-result-card-name")}>
                  {data?.artists?.items[0]?.name}
                </h2>
                <div className={cx("search-category-result-card-type")}>
                  {data?.artists?.items[0]?.type}
                </div>
              </div>
            </div>
            <div className={cx("search-category-result-section", "tracks")}>
              <div className={cx("search-category-result-list")}>
                {data?.tracks?.items
                  ?.slice(0, 4)
                  .map((item: any, idx: number) => (
                    <TrackListItem
                      id={item?.id}
                      imgUrl={item?.album?.images[0]?.url}
                      name={item?.name}
                      artist={item?.artists[0]?.name}
                      album={item?.album?.name}
                      durationTime={item?.duration_ms}
                      uri={item.uri}
                      key={idx}
                    />
                  ))}
              </div>
            </div>
          </div>
          {Object.keys(data)
            .filter((key) => key !== "tracks")
            .map((key: string) => (
              <div className={cx("search-category-result-section", key)}>
                <ListSection title={key}>
                  {data?.[key]?.items?.map((item: any, idx: number) => (
                    <ListItem
                      key={idx}
                      {...{
                        name: item?.name,
                        images: item?.images,
                        description: item?.type,
                        uri: item?.uri,
                      }}
                    />
                  ))}
                </ListSection>
              </div>
            ))}
        </div>
      </>
    ),
    tracks: data?.tracks?.items?.map((item: any) => (
      <h3>{item.name}</h3>
      // <SongListItem
      //   id={item?.id}
      //   idx={data?.tracks?.items.indexOf(item)}
      //   imgUrl={item?.album?.images[0]?.url}
      //   name={item?.name}
      //   artist={item?.artists[0]?.name}
      //   album={item?.album?.name}
      //   durationTime={item?.duration_ms}
      //   uri={item.uri}
      //   key={`track-${item.id}`}
      // />
    )),
    // playlists: (
    //   <ListSection
    //     title={`${data?.playlists?.items?.length} playlists`}
    //     items={data?.playlists?.items?.map((item: any) => ({
    //       name: item?.name,
    //       images: item?.album?.images?.[0],
    //       description: item?.type,
    //       uri: item?.uri,
    //     }))}
    //   />
    // ),
    // artists: (
    //   <ListSection
    //     title={`${data?.artists?.items?.length} artists`}
    //     items={data?.artists?.items?.map((item: any) => ({
    //       name: item?.name,
    //       images: item?.album?.images?.[0],
    //       description: item?.type,
    //       uri: item?.uri,
    //     }))}
    //   />
    // ),
    // albums: (
    //   <ListSection
    //     title={`${data?.albums?.items?.length} albums`}
    //     items={data?.albums?.items?.map((item: any) => ({
    //       name: item?.name,
    //       images: item?.album?.images?.[0],
    //       description: item?.type,
    //       uri: item?.uri,
    //     }))}
    //   />
    // ),
  };

  if (!list[type]) return <></>;
  return (
    <div className={`search-result-section ${type}`}>
      <h2 className="search-result-title">
        {Object.keys(list)
          .filter((key) => key !== "all")
          .some((key) => key === type) && category?.[0]}
      </h2>
      <div className="search-result-list">{list[type]}</div>
    </div>
  );
}
