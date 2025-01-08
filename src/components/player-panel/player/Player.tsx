"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

import {
  useMutationPlayerPause,
  useMutationPlayerStart,
  useMutationSeekPosition,
  useMutationSetRepeat,
  useMutationSkipNext,
  useMutationSkipPrev,
  useMutationToggleShuffle,
} from "@service/Player/usePlayer";
import usePlaying from "@store/playing/usePlaying";
import useSDK from "@store/sdk/useSDK";
import { convertDurationTime } from "@utils/convert";
import usePlayerController from "@hooks/usePlayerController";
import svgIcon from "@/components/svgIcon/SvgIcon";
import SvgIcon from "@/components/svgIcon/SvgIcon";

const SKIP_PREV_THRESHOLD = 3000;
const REPEAT_STATES = ["off", "context", "track"];

export default function Player() {
  return (
    <div className={styles["player"]}>
      <h2 className={styles["player-header"]}>NOW PLAYING</h2>
      <div className={styles["player-body"]}>
        <div className={styles["player-album"]}>
          <img
            src={
              // currentTrack?.album?.images?.[0]?.url ??
              "https://dummyimage.com/200x200/ccc/fff.png"
            }
            alt="track album"
          />
        </div>
        <div className={styles["player-track-info"]}>
          <p className={styles["player-track-name"]}>
            No Track
            {/* {currentTrack?.name || "No track"} */}
          </p>
          <p className={styles["player-track-artist"]}>
            No Artist
            {/* {currentTrack?.artists?.[0]?.name || "No Track"} */}
          </p>
        </div>
        <div className={styles["player-bar"]}>
          <input
            className={styles["player-progress"]}
            name="progress"
            type="range"
            min={0}
            // max={durationMs}
            // value={currentPosition}
            // onChange={seekToPosition}
            step={1000}
          />
          <div className={styles["player-time"]}>
            <div className={styles["player-current-time"]}>
              {/* {convertDurationTime(currentPosition)} */}
            </div>
            <div className={styles["player-duration"]}>
              {/* {convertDurationTime(durationMs)} */}
            </div>
          </div>
        </div>
        <div className={styles["player-controller"]}>
          <div className={styles["player-controller-left"]}>
            <button
              className={styles["player-shuffle"]}
              //   onClick={() => setShuffle(!isShuffle)}
            >
              <SvgIcon category="player" name="shuffle" />
            </button>
            <button
              className={styles["player-skip-prev"]}
              // onClick={clickPrev}
            >
              <SvgIcon category="player" name="prev" />
            </button>
          </div>
          <button
            className={styles["player-playpause"]}
            // onClick={() =>
            //   isPaused ? onPlay.mutate(currentProgress) : onPause.mutate()
            // }
          >
            <SvgIcon category="player" name="play" />
          </button>
          <div className={styles["player-controller-right"]}>
            <button
              className={styles["player-skip-next"]}
              //   onClick={() => skipNext.mutate()}
            >
              <SvgIcon category="player" name="next" />
            </button>
            <button
              className={styles["player-repeat"]}
              //   onClick={() => setRepeatIdx((prev) => prev + 1)}
            >
              <SvgIcon
                category="player"
                name={`repeat-${
                  {
                    0: "off",
                    1: "context",
                    2: "track",
                  }[0] || "off"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles["player-footer"]}>
        <div className={styles["player-volume"]}>
          <input className={styles["player-volume-input"]} type="range" />
        </div>
      </div> */}
    </div>
  );
}
