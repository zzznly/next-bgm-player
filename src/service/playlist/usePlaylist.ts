import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "./queries";

export const useNewReleaseAlbums = ({ onSuccess, onError }: any = {}) => {
  return useQuery(queryOptions.newReleaseAlbums());
};

export const usePlaylistDetail = (params: PlaylistRequest) => {
  return useQuery(queryOptions.detail(params));
};
