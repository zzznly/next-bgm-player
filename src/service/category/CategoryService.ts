import Service from "../Service";

class CategoryService extends Service {
  getCategories() {
    return this.http.get<CategoriesResponse>("/browse/categories");
  }

  //   getGenreSeeds() {
  //     return this.service.get<any, AxiosResponse<any[]>>(
  //       "/recommendations/available-genre-seeds"
  //     );
  //   }
}

export default new CategoryService();
