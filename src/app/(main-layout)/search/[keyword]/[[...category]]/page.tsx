import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { getDehydratedQueries } from "@/utils/react-query";
import { queryOptions } from "@/service/search/queries";
import ListSection from "@/components/list-section/ListSection";
import ListItem from "@/components/list-section/list-item/ListItem";
import TrackListItem from "@/components/track-list-item/TrackListItem";
import SearchCategoryResult from "@/components/pages/search/search-category-result/SearchCategoryResult";

const cx = classNames.bind(styles);

export default async function SearchResultPage({
  params,
}: {
  params: { keyword: string; category: string };
}) {
  const { keyword, category } = await params;
  const type = (category?.[0] as string)?.slice(0, -1) ?? "all";

  const query = await getDehydratedQueries([
    queryOptions.getSearchResult({
      q: keyword,
      type: type !== "all" ? type : "album,artist,playlist,track",
    }),
  ]);
  const data = query?.[0]?.state?.data;
  console.log("## search data: ", data);

  return <SearchCategoryResult data={data} />;
}
