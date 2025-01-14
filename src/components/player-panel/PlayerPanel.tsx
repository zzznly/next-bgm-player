"use client";

import styles from "./styles.module.scss";
import PlayList from "./playlist/PlayList";
import Player from "./player/Player";
import useSpotifyPlayer from "@/hooks/useSpotifyPlayer";

export default function PlayerPanel() {
  useSpotifyPlayer();

  return (
    <div className={styles["player-panel"]}>
      <PlayList />
      <Player />
    </div>
  );
}