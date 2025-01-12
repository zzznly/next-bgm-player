import PlaylistService from "@/service/playlist/PlaylistService";
import styles from "./styles.module.scss";
import Image from "next/image";
import { convertTime } from "@/utils";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ type: "album" | "playlist"; id: string }>;
}) {
  const { type, id } = await params;
  const data = await PlaylistService.getDetailData(type, id);
  console.log(2222, data);

  return (
    <div className={styles["detail-page"]}>
      <div className={styles["detail-page-head"]}>
        <Image
          src={data?.images[0]?.url}
          width={182}
          height={182}
          alt="album/playlist image"
        />
        <div className={styles["detail-page-info"]}>
          <div className={styles["detail-page-type"]}>
            {data?.type.toUpperCase()}
          </div>
          <div className={styles["detail-page-title"]}>{data?.name}</div>
          <div className={styles["detail-page-description"]}>
            {data?.description}
          </div>
          <div className={styles["detail-page-owner"]}>
            {data?.owner?.display_name || data?.artists[0]?.name}
          </div>
        </div>
      </div>
      <div className={styles["detail-page-body"]}>
        <div className={styles["track-list"]}>
          {data?.tracks?.items?.map(
            (item: PlaylistDetailItem | any, idx: number) => (
              <button className={styles["track-item"]} key={idx}>
                <div className={styles["track-no"]}>{idx + 1}</div>
                <Image
                  src={
                    item?.track?.album?.images?.[0]?.url ||
                    data?.images?.[0]?.url
                  }
                  width={40}
                  height={40}
                  alt="track album image"
                />
                <div className={styles["track-info"]}>
                  <div className={styles["track-name"]}>
                    {item?.track?.name || item?.name}
                  </div>
                  <div className={styles["track-artists"]}>
                    {(item?.track?.artists || item?.artists)
                      ?.map((v: PlaylistDetailItemTrack) => v.name)
                      .join(", ")}
                  </div>
                </div>
                <div className={styles["track-album"]}>
                  {item?.track?.album?.name || item?.name}
                </div>
                <div className={styles["track-runningtime"]}>
                  {convertTime(item?.track?.duration_ms || item.duration_ms)}
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
