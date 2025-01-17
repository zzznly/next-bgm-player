interface CategoriesResponse {
  categories: ListDataResponse<CategoriesItem>;
}
interface CategoriesItem {
  href?: string;
  icons?: Image[];
  id: string;
  name?: string;
}
