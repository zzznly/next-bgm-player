import ListItem from "@/components/list-item/ListItem";
import ListSection from "@/components/list-section/ListSection";
import TrackItem from "@/components/track-item/TrackItem";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import SearchService from "@/service/search/SearchService";

const cx = classNames.bind(styles);

export default async function SearchKeywordResultPage({
  params,
}: {
  params: { keyword: string };
}) {
  const { keyword } = await params;
  const data = await SearchService.getSearchResult({
    q: keyword,
    type: "playlist,album,artist,track",
  });
  console.log("## search data: ", data);

  return (
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
                ))}
            </div>
          </div>
        </div>
        {["albums", "artists", "playlists"].map((key: string, idx: number) => (
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
  );
}
