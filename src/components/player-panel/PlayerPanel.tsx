import styles from "./styles.module.scss";
import PlayList from "./playlist/PlayList";
import Player from "./player/Player";

export default function PlayerPanel() {
    return <div className={styles["player-panel"]}>
        <PlayList />
        <Player />
    </div>;
}