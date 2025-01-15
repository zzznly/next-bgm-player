import ListSection from "@/components/list-section/ListSection";
import PlaylistService from "@/service/playlist/PlaylistService";

export default async function SearchNewReleasesSection() {
  const data = await PlaylistService.getNewReleaseAlbums();

  return (
    <ListSection
      title="New Release"
      items={(data as NewReleaseAlbumsResponse)?.albums?.items
        ?.sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .map(({ name, images, uri, type, artists }: NewReleaseAlbumItem) => ({
          uri,
          type,
          images,
          name,
          description: artists[0].name,
        }))}
    />
  );
}
