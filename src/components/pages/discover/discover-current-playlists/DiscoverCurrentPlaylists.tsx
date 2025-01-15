import ListSection from "@/components/list-section/ListSection";
import PlaylistService from "@/service/playlist/PlaylistService";

export default async function DiscoverCurrentPlaylists() {
  const data = await PlaylistService.getCurrentPlaylists();

  return (
    <>
      <ListSection title="Playlist You Need" items={data.items} />
    </>
  );
}
