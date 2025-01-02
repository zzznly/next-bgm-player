import Service from "../Service";

class PlaylistService extends Service {
  getPlaylistDetail(params: PlaylistRequest) {
    return this.http.get(`/playlists/${params.playlist_id}`);
  }

  getNewReleaseAlbums() {
    return this.http.get<NewReleaseAlbumsResponse>("/playlists/new-release");
  }
}

export default new PlaylistService();
