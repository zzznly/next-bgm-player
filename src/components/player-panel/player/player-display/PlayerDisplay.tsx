"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

export default async function PlayerDisplay() {
  // const { data: currentTrackData } = await useCurrentTrack();

  return (
    <div className={styles["player-display"]}>
      <div className={styles["player-display-album"]}>
        <Image
          width={200}
          height={120}
          src={
            // currentTrackData?.album?.images?.[0]?.url ??
            "https://dummyimage.com/200x120/ccc/fff.png"
          }
          alt="track album image"
        />
      </div>
      <div className={styles["player-display-info"]}>
        <p className={styles["player-display-name"]}>
          {/* {currentTrackData?.name || "No track"} */}
        </p>
        <p className={styles["player-display-artist"]}>
          {/* {currentTrackData?.artists?.[0]?.name || "No Track"} */}
        </p>
      </div>
    </div>
  );
}
