import styles from "./styles.module.scss";
import PlayList from "./playlist/PlayList";
import Player from "./player/Player";
import { queryOptions } from "@/service/playlist/queries";
import { getDehydratedQueries, Hydrate } from "@/utils/react-query";

export default function PlayerPanel() {
  // const query = getDehydratedQueries(queryOptions.player());

  return (
    <div className={styles["player-panel"]}>
      {/* <Hydrate state={{ queries: [query] }}> */}
        <PlayList />
        <Player />
      {/* </Hydrate> */}
    </div>
  );
}
