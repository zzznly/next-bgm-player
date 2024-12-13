import styles from "./styles.module.scss";

export default function PlayerList() {
    return <div className={styles["playlist"]}>
        <div className={styles["playlist-wrap"]}>
            <div className={styles["playlist-current"]}>
                <p className={styles["playlist-title"]}>Now Playing</p>
                {/* {currently_playing && <PlayerListItem {...currentTrack} />} */}
            </div>
            <div className={styles["playlist-queue"]}>
                {/* <p className={styles["playlist-title"]}>Next Tracks</p> */}
                {/* {queue
                    ?.map((v: any, i: number, self: any[]) => {
                        return self.findIndex((obj: any) => obj.uri === v.uri) === i
                            ? v
                            : null;
                    })
                    .filter((item: any) => item !== null)
                    .map((item: any, idx: number) => (
                        <PlayerListItem key={`track-${idx}`} {...item} />
                    ))} */}
            </div>
        </div>
    </div>;
}