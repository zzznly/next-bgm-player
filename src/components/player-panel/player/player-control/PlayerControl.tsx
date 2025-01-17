"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import SvgIcon from "@/components/svgIcon/SvgIcon";

export default function PlayerControl() {
  //   const { data: currentTrack } = useCurrentTrack();
  // const { data: playbackState } = usePlaybackState();
  // const { mutate: onPlay } = usePlay(currentPosition);
  // const { mutate: onPause } = usePause();
  // const { mutate: skipPreviousTrack } = useSkipPreviousTrack();
  // const { mutate: skipNextTrack } = useSkipNextTrack(deviceId);
  // const { mutate: setRepeatMode } = useSetRepeat({ state, deviceId });
  // const { mutate: setShuffle } = useSetShuffle();
  // const { mutate: setVolume } = useSetVolume();

  const REPEAT_STATES: RepeatState[] = ["off", "context", "track"];
  const [repeatIdx, setRepeatIdx] = useState(0);

  const handleClickRepeat = () => {
    setRepeatIdx((idx) => (idx + 1) % REPEAT_STATES.length);
    // setRepeatMode(REPEAT_STATES[repeatIdx]);
  };

  return (
    <div className={styles["player-control"]}>
      <div className={styles["player-control-progress"]}>
        <input
          className={styles["player-control-progress-bar"]}
          name="progress"
          type="range"
          step={1000}
          min={0}
          // max={currentTrack?.duration_ms}
          // value={currentTrack?.progress_ms}
          // onChange={() => seekToPosition({ position_ms: currentTrack?.progress_ms, device_id: deviceId })}
        />
        <div className={styles["player-control-progress-time"]}>
          <div className={styles["player-control-progress-position"]}>
            {/* {convertDurationTime(currentTrack?.progress_ms)} */}
          </div>
          <div className={styles["player-control-progress-duration"]}>
            {/* {convertDurationTime(currentTrack?.duration_ms)} */}
          </div>
        </div>
      </div>
      <div className={styles["player-control-controller"]}>
        <div className={styles["player-control-controller-left"]}>
          <button
            className={styles["player-control-controller-shuffle"]}
            // onClick={() => setIsShuffle(!playbackState?.shuffle_state)}
          >
            {/* <SvgIcon
              category="player"
              name={playbackState?.shuffle_state ? "shuffle-active" : "shuffle"}
            /> */}
          </button>
          <button
            className={styles["player-control-controller-prev"]}
            // onClick={() => skipPreviousTrack()}
          >
            <SvgIcon category="player" name="prev" />
          </button>
        </div>
        <button
          className={styles["player-control-controller-playpause"]}
          // onClick={() =>
          //   playbackState?.is_playing ? onPlay(currentProgress) : onPause()
          // }
        >
          <SvgIcon category="player" name="play" />
        </button>
        <div className={styles["player-control-controller-right"]}>
          <button
            className={styles["player-control-controller-next"]}
            //   onClick={() => skipNextTrack()}
          >
            <SvgIcon category="player" name="next" />
          </button>
          <button
            className={styles["player-control-controller-repeat"]}
            onClick={handleClickRepeat}
          >
            <SvgIcon
              category="player"
              name={`repeat-${REPEAT_STATES[repeatIdx]}`}
            />
          </button>
        </div>
        {/* <div className={styles["player-control-controller-volume"]}>
          <input className={styles["player-volume-input"]} type="range" />
        </div> */}
      </div>
    </div>
  );
}
