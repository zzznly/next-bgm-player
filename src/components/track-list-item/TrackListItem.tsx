import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { convertDurationTime } from "@/utils";
const cx = classNames.bind(styles);
// import usePlaying from "@store/playing/usePlaying";

interface TrackListItemProps {
  idx?: number;
  id: number;
  imgUrl: string;
  name: string;
  artist: string;
  album?: string;
  durationTime: string;
  uri: string;
}
export default function TrackListItem({
  id,
  imgUrl,
  name,
  artist,
  album,
  durationTime,
  uri,
}: TrackListItemProps) {
  //   const { setPlayingURL } = usePlaying();
  return (
    <li className={cx("track-item")}>
      <img className={cx("track-item-album-image")} src={imgUrl} alt="album" />
      <div className={cx("track-item-info")}>
        <p className={cx("track-item-info-name")}>{name}</p>
        <p className={cx("track-item-info-artist")}>{artist}</p>
      </div>
      <p className={cx("track-item-album-name")}>{album}</p>
      <div className={cx("track-item-runtime")}>
        {convertDurationTime(Number(durationTime))}
      </div>
    </li>
  );
}
