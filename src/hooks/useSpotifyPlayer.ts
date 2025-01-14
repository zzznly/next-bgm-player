import { getCookieString } from "@/utils";
import { useEffect } from "react";

export default function useSpotifyPlayer() {
  const token = getCookieString("access_token");

  useEffect(() => {
    if (!token) return;

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    let playerInstance: any;

    (window as any).onSpotifyWebPlaybackSDKReady = () => {
      playerInstance = new (window as any).Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token?.replace(/\"/g, ""));
        },
        volume: 0.5,
      });

      playerInstance.connect().then((res: boolean) => {
        console.log("player connected: ", res);
      });

      // playerInstance.addListener("ready", (event: { device_id: string }) => {
      //   console.log("Ready with Device ID: ", event.device_id);
      // });

      // playerInstance.addListener(
      //   "not_ready",
      //   (event: { device_id: string }) => {
      //     console.log("Device ID has gone offline: ", event.device_id);
      //   }
      // );

      // playerInstance.addListener("progress", (state: any) => {
      // });
      // playerInstance.addListener("player_state_changed", (state: any) => {
      //   if (!state) return;
      //   // setTrack(state?.track_window.current_track);
      //   // setPaused(state?.paused);
      //   // setDurationMs(state?.duration);
      //   console.log("state changed: ", state);
      // });
    };

    return () => {
      // playerInstance.removeEventListener("ready");
      // playerInstance.removeEventListener("not_ready");
    };
  }, [token]);
}
