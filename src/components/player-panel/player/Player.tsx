"use client";

import styles from "./styles.module.scss";
import useSpotifyPlayer from "@/hooks/useSpotifyPlayer";
import PlayerDisplay from "./player-display/PlayerDisplay";
import PlayerControl from "./player-control/PlayerControl";

export default function Player() {
  useSpotifyPlayer();

  return (
    <div className={styles["player"]}>
      <h2 className={styles["player-header"]}>NOW PLAYING</h2>
      <div className={styles["player-body"]}>
        <PlayerDisplay />
        <PlayerControl />
      </div>
    </div>
  );
}
