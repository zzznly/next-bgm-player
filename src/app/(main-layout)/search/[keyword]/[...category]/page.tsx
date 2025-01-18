import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-item/ListItem";
import TrackListItem from "@/components/track-item/TrackItem";
import SearchService from "@/service/search/SearchService";

export default async function SearchResultPage({
  params,
}: {
  params: { keyword: string; category: string };
}) {
  const { keyword, category } = await params;
  const categoryType = (category?.[0] as string);
  const response = await SearchService.getSearchResult({
    q: keyword,
    type: "playlist,album,artist,track",
  });
  const data = response?.[categoryType];
  console.log("## search data: ", categoryType, data);

  return (
    <>
      {categoryType === "tracks" ? (
        <>
          {data?.items?.map((item: any, idx: number) => (
            <TrackListItem
              id={item?.id}
              imgUrl={item?.album?.images[0]?.url}
              name={item?.name}
              artist={item?.artists[0]?.name}
              album={item?.album?.name}
              durationTime={item?.duration_ms}
              uri={item.uri}
              key={`track-${idx}`}
            />
          ))}
        </>
      ) : (
        <ListSection title={`${data?.items?.length} ${category}`}>
          {data?.items?.map((item: any) => (
            <ListItem
              key={item?.id}
              name={item?.name}
              images={item?.album?.images?.[0]}
              description={item?.type}
              uri={item?.uri}
            />
          ))}
        </ListSection>
      )}
    </>
  );
}
