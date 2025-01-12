import Service from "../Service";

class PlaylistService extends Service {
  getNewReleaseAlbums() {
    return this.http.get<NewReleaseAlbumsResponse>("/browse/new-releases", {
      next: { revalidate: 3 },
    });
  }
  getCurrentPlaylists() {
    return this.http.get<any>("/me/playlists");
  }
  getDetailData(type: "playlist" | "album", id: string) {
    return this.http.get<AlbumDetailResponse & PlaylistDetailResponse>(
      `/${type}s/${id}`,
      { cache: "force-cache" }
    );
  }
}

export default new PlaylistService();
