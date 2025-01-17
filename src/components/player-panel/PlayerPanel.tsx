import styles from "./styles.module.scss";
import PlayList from "./playlist/PlayList";
import Player from "./player/Player";
import { Hydrate } from "@/utils/react-query";

export default function PlayerPanel() {
  return (
    <div className={styles["player-panel"]}>
      {/* <Hydrate state={{ queries: [] }}> */}
      {/* server component */}
      <PlayList />
      {/* client component */}
      <Player />
      {/* </Hydrate> */}
    </div>
  );
}
