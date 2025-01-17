import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function SearchCategoryResult() {
  const list: Record<string, React.ReactNode> = {
    all: (
      <div className={cx("search-category-result", "all")}>
        <div className={cx("search-category-result-wrap")}>
          <div className={cx("search-category-result-section", "topResult")}>
            <div
              className={cx(
                "search-category-result-card"
                // data?.artists?.items[0]?.type === "artist" && "artist"
              )}
            >
              <div className={cx("search-category-result-card-image")}>
                {/* <Image src={data?.artists?.items[0]?.images[0]?.url} alt=""/> */}
              </div>
              <h2 className={cx("search-category-result-card-name")}>
                {/* {data?.artists?.items[0]?.name} */}
              </h2>
              <div className={cx("search-category-result-card-type")}>
                {/* {data?.artists?.items[0]?.type} */}
              </div>
            </div>
          </div>
          <div className={cx("search-category-result-section", "tracks")}>
            <div className={cx("search-category-result-list")}>
              {/* {data?.tracks?.items
                ?.slice(0, 4)
                .map((item: any, idx: number) => (
                  <SongListItem
                    id={item?.id}
                    imgUrl={item?.album?.images[0]?.url}
                    name={item?.name}
                    artist={item?.artists[0]?.name}
                    durationTime={item?.duration_ms}
                    uri={item.uri}
                    key={idx}
                  />
                ))} */}
            </div>
          </div>
        </div>
        {/* {Object.keys(data)
          .filter((v) => v !== "tracks")
          .map((key: string) => (
            <div className={cx("search-category-result-section", key)}>
              <ListSection
                title={key}
                data={data?.[key]?.items?.map(
                  ({ name, images, type, uri }: any) => ({
                    name,
                    imageUrl: images[0]?.url,
                    description: type,
                    uri,
                  })
                )}
              />
            </div>
          ))} */}
      </div>
    ),
    // tracks: data?.tracks?.items?.map((item: any, idx: number) => (
    //   <SongListItem
    //     id={item?.id}
    //     idx={data?.tracks?.items.indexOf(item)}
    //     imgUrl={item?.album?.images[0]?.url}
    //     name={item?.name}
    //     artist={item?.artists[0]?.name}
    //     album={item?.album?.name}
    //     durationTime={item?.duration_ms}
    //     uri={item.uri}
    //     key={idx}
    //   />
    // )),
    // playlists: (
    //   <ListSection
    //     title={`${data?.playlists?.items?.length} playlists`}
    //     data={data?.playlists?.items?.map(
    //       ({ name, images, type, uri }: any, idx: number) => ({
    //         name,
    //         imageUrl: images[0]?.url,
    //         description: type,
    //         uri,
    //       })
    //     )}
    //   />
    // ),
    // artists: (
    //   <ListSection
    //     title={`${data?.artists?.items?.length} artists`}
    //     data={data?.artists?.items?.map(
    //       ({ name, images, type, uri }: any, idx: number) => ({
    //         name,
    //         imageUrl: images[0]?.url,
    //         description: type,
    //         uri,
    //       })
    //     )}
    //   />
    // ),
    // albums: (
    //   <ListSection
    //     title={`${data?.albums?.items?.length} albums`}
    //     data={data?.albums?.items?.map(
    //       ({ name, images, type, uri }: any, idx: number) => ({
    //         name,
    //         imageUrl: images[0]?.url,
    //         description: type,
    //         uri,
    //       })
    //     )}
    //   />
    // ),
  };

  const pathname = usePathname();
  const { category = "all" } = useParams();
  const [resultComponent, setResultComponent] = useState(list[category]);

  useEffect(() => {
    setResultComponent(list[category]);
  }, [pathname, category]);

  if (!list[category]) return <></>;
  return (
    <div className={`search-result-section ${category}`}>
      <h2 className="search-result-title">
        {Object.keys(list)
          .filter((key) => key !== "all")
          .some((key) => key === category) && category}
      </h2>
      <div className="search-result-list">{resultComponent}</div>
    </div>
  );
}
