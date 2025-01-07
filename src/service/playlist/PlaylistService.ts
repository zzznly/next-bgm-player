import Service from "../Service";

class PlaylistService extends Service {
  // getPlaylistDetail(params: PlaylistRequest) {
  //   return this.http.get(`/playlists/${params.playlist_id}`);
  // }

  getNewReleaseAlbums() {
    return this.http.get<NewReleaseAlbumsResponse>("/browse/new-releases");
  }
}

export default new PlaylistService();
