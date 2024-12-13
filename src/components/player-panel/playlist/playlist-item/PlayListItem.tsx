import Image from "next/image";
import styles from "./styles.module.scss";

// import usePlaying from "@store/playing/usePlaying";
// import { convertDurationTime } from "@utils/convert";

export default function PlayListItem({
    uri,
    album,
    name = "No Track",
    artists = "Various Artists",
    duration_ms = 0,
}: {
    uri: string;
    album: any;
    name: string;
    artists: any;
    duration_ms: number;
}) {
    // const { setPlayingURL } = usePlaying();

    return (
        <div className="playlist-item">
            <div className="playlist-item-album">
                <Image
                    className="playlist-item-album-image"
                    src={
                        // album?.images?.[0]?.url ??
                        "https://dummyimage.com/200x120/ccc/fff.png"
                    }
                    alt=""
                />
            </div>
            <div className="playlist-item-info">
                <p className="playlist-item-name">{name}</p>
                <p className="playlist-item-artist">{artists?.[0]?.name}</p>
            </div>
            <div className="playlist-item-runtime">
                {/* {convertDurationTime(duration_ms)} */}
            </div>
        </div>
    );
}
