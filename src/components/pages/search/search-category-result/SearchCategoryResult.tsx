"use client";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import TrackListItem from "@/components/track-list-item/TrackListItem";
import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-section/list-item/ListItem";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

export default function SearchCategoryResult({ data }: any) {
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
                      key={`track-${idx}`}
                    />
                  ))}
              </div>
            </div>
          </div>
          {Object.keys(data)
            .filter((key) => key !== "tracks")
            .map((key: string, idx: number) => (
              <div className={cx("search-category-result-section", key)}>
                <ListSection title={key} key={`key-${idx}`}>
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
    tracks: data?.tracks?.items?.map((item: any, idx: number) => (
      <TrackListItem
        id={item?.id}
        imgUrl={item?.album?.images[0]?.url}
        name={item?.name}
        artist={item?.artists[0]?.name}
        album={item?.album?.name}
        durationTime={item?.duration_ms}
        uri={item.uri}
        key={`track-${idx}`}
      />
    )),
    playlists: (
      <ListSection title={`${data?.playlists?.items?.length} playlists`}>
        {data?.playlists?.items?.map((item: any) => (
          <ListItem
            name={item?.name}
            images={item?.album?.images?.[0]}
            description={item?.type}
            uri={item?.uri}
          />
        ))}
      </ListSection>
    ),
    artists: (
      <ListSection title={`${data?.artists?.items?.length} artists`}>
        {data?.artists?.items?.map((item: any) => (
          <ListItem
            key={item?.id}
            name={item?.name}
            images={item?.album?.images?.[0]}
            description={item?.type}
            uri={item?.uri}
          />
        ))}
      </ListSection>
    ),
    albums: (
      <ListSection title={`${data?.albums?.items?.length} albums`}>
        {data?.albums?.items?.map((item: any) => (
          <ListItem
            key={item?.id}
            name={item?.name}
            images={item?.album?.images?.[0]}
            description={item?.type}
            uri={item?.uri}
          />
        ))}
      </ListSection>
    ),
  };

  const pathname = usePathname();
  const { category = "all" } = useParams();
  const [resultComponent, setResultComponent] = useState(list[category]);

  useEffect(() => {
    console.log(343434, category);
    setResultComponent(list[category]);
  }, [pathname, category]);

  if (!list[category]) return <></>;
  return (
    <div className={`search-result-section ${category}`}>
      {/* <h2 className="search-result-title">
        {Object.keys(list)
          .filter((key) => key !== "all")
          .some((key) => key === category) && category}
      </h2> */}
      <div className="search-result-list">{resultComponent}</div>
    </div>
  );
}
