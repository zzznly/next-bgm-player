import CategoryService from "@/service/category/CategoryService";

export const queryKeys = {
  categories: ["category.categories"] as const,
};

export const queryOptions = {
  categories: () => ({
    queryKey: queryKeys.categories,
    queryFn: () => CategoryService.getCategories(),
  }),
};
