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

const SKIP_PREV_THRESHOLD = 3000;
const REPEAT_STATES = ["off", "context", "track"];

export default function PlayerDevice() {
    return (
        <div className={styles["player"]}>
            <h2 className={styles["player-header"]}>NOW PLAYING</h2>
            <div className={styles["player-body"]}>
                <div className="player-album">
                    <img
                        src={
                            // currentTrack?.album?.images?.[0]?.url ??
                            "https://dummyimage.com/200x200/ccc/fff.png"
                        }
                        alt="track album"
                    />
                </div>
                <div className="player-track-info">
                    <p className="player-track-name">
                        {/* {currentTrack?.name || "No track"} */}
                    </p>
                    <p className="player-track-artist">
                        {/* {currentTrack?.artists?.[0]?.name || "No Track"} */}
                    </p>
                </div>
                <div className="player-bar">
                    {/* <input
                        className="player-progress"
                        name="progress"
                        type="range"
                        min={0}
                        max={durationMs}
                        value={currentPosition}
                        onChange={seekToPosition}
                        step={1000}
                    /> */}
                    <div className="player-time">
                        <div className="player-current-time">
                            {/* {convertDurationTime(currentPosition)} */}
                        </div>
                        <div className="player-duration">
                            {/* {convertDurationTime(durationMs)} */}
                        </div>
                    </div>
                </div>
                <div className="player-controller">
                    <div className="player-controller-left">
                        {/* <button
                            className="player-shuffle"
                            onClick={() => setShuffle(!isShuffle)}
                        >
                            <Icon
                                category="player"
                                name={isShuffle ? "shuffle-active" : "shuffle"}
                            />
                        </button>
                        <button className="player-skip-prev" onClick={clickPrev}>
                            <Icon category="player" name="prev" />
                        </button> */}
                    </div>
                    {/* <button
                        className="player-playpause"
                        onClick={() =>
                            isPaused ? onPlay.mutate(currentProgress) : onPause.mutate()
                        }
                    >
                        <Icon category="player" name={isPaused ? "play" : "pause"} />
                    </button>
                    <div className="player-controller-right">
                        <button
                            className="player-skip-next"
                            onClick={() => skipNext.mutate()}
                        >
                            <Icon category="player" name="next" />
                        </button>
                        <button
                            className="player-repeat"
                            onClick={() => setRepeatIdx((prev) => prev + 1)}
                        >
                            <Icon
                                category="player"
                                name={`repeat-${{
                                    0: "off",
                                    1: "context",
                                    2: "track",
                                }[repeatStateIdx] || "off"
                                    }`}
                            />
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="player-footer">
                <div className="player-volume">
                    <input className="player-volume-input" type="range" />
                </div>
            </div>
        </div>
    );
}
