import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-item/ListItem";
import TrackItem from "@/components/track-item/TrackItem";
import SearchService from "@/service/search/SearchService";
import { getDehydratedQuery, Hydrate } from "@/utils/react-query";
import { queryKeys, queryOptions } from "@/service/search/queries";
import SearchSectionResultTracks from "@/components/pages/search/search-section-result-tracks/SearchSectionResultTracks";

export default async function SearchResultPage({
  params,
}: {
  params: { keyword: string; category: string };
}) {
  const { keyword, category } = await params;
  const type = (category?.[0] as string).slice(0, -1);

  const query = await getDehydratedQuery(
    queryOptions.getSearchResult({ q: keyword, type })
  );

  const data = query?.state?.data?.[type];
  console.log("## search data: ", type, data);

  return (
    <Hydrate state={{ queries: [query] }}>
      {type === "track" ? (
        <SearchSectionResultTracks />
      ) : (
        <SectionSearchResultCategory data={data} category={category?.[0]} />
      )}
    </Hydrate>
  );
}

function SectionSearchResultCategory({
  data,
  category,
}: {
  data: any;
  category: string;
}) {
  return (
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
  );
}
