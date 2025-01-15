import Image from "next/image";
import styles from "./styles.module.scss";
import { convertDurationTime } from "@/utils";
export interface PlayListItemProps {
  uri: string;
  album: any;
  name?: string;
  artists?: any;
  duration_ms?: number;
}

export default function PlayListItem({
  uri,
  album,
  name = "No Track",
  artists = "Various Artists",
  duration_ms = 0,
}: PlayListItemProps) {
  // const { setPlayingURL } = usePlaying();

  return (
    <div className="playlist-item">
      <div className="playlist-item-album">
        <Image
          className={styles["playlist-item-album-image"]}
          src={
            album?.images?.[0]?.url ??
            "https://dummyimage.com/50x50/ccc/fff.png"
          }
          alt="playlist item album image"
          width={50}
          height={50}
        />
      </div>
      <div className={styles["playlist-item-info"]}>
        <p className={styles["playlist-item-name"]}>{name}</p>
        <p className={styles["playlist-item-artist"]}>{artists?.[0]?.name}</p>
      </div>
      <div className={styles["playlist-item-runtime"]}>
        {convertDurationTime(duration_ms)}
      </div>
    </div>
  );
}
