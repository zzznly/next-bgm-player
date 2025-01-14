import Service from "../Service";

class PlayerService extends Service {
  getPlaybackState() {
    return this.http.get("/me/player");
  }
  getCurrentPlayingTrack() {
    return this.http.get("/me/player/currently-playing");
  }

  getUserCurrentPlaylist() {
    return this.http.get("/me/player/queue");
  }
  addToUserCurrentPlaylist(device_id: string, uri: string | undefined) {
    return this.http.post(`/me/player/queue?uri=${uri}&device_id=${device_id}`);
  }

  startPlayback(device_id: string, uri: string | undefined, position: number) {
    return this.http.put(
      `/me/player/play?device_id=${device_id}`,
      uri?.split(":")[1] === "track"
        ? {
            uris: [uri],
            position_ms: position,
          }
        : {
            context_uri: uri,
            position_ms: position,
          }
    );
  }
  pausePlayback(device_id: string) {
    return this.http.put(`/me/player/pause?device_id=${device_id}`);
  }
  skipNextTrack(device_id: string) {
    return this.http.post(`/me/player/next?device_id=${device_id}`);
  }
  skipPreviousTrack(device_id: string) {
    return this.http.post(`/me/player/previous?device_id=${device_id}`);
  }

  seekPosition(position_ms: number, device_id: string) {
    return this.http.put(
      `/me/player/seek?position_ms=${position_ms}&device_id=${device_id}`
    );
  }

  setRepeat(state: string, device_id: string) {
    return this.http.put(
      `/me/player/repeat?state=${state}&device_id=${device_id}`
    );
  }
  setVolume(volume_percent: number, device_id: string) {
    return this.http.put(
      `/me/player/volume?volume_percent=${volume_percent}&device_id=${device_id}`
    );
  }
  toggleShuffle(state: boolean, device_id: string) {
    return this.http.put(
      `/me/player/shuffle?state=${state}&device_id=${device_id}`
    );
  }
}
export default new PlayerService();
