interface ListItemsResponse<T> {
  href: string;
  limit: number;
  next: string;
  items: T[];
  offset: number;
  previous: null;
  total: number;
}