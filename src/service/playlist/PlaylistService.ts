import Service from "../Service";

class PlaylistService extends Service {
  getNewReleaseAlbums() {
    return this.http.get<NewReleaseAlbumsResponse>("/browse/new-releases");
  }
  getCurrentPlaylist() {
    return this.http.get<any>("/me/playlists");
  }
  // getPlaylistDetail(params: PlaylistRequest) {
  //   return this.http.get(`/playlists/${params.playlist_id}`);
  // }
}

export default new PlaylistService();
