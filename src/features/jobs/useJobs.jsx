import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useEffect } from "react";

export function useJobs() {
  const {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: async ({ pageParam }) => {
      const ret = await getJobs({
        currentCursor: pageParam.nextCursor,
        currentCursorId: pageParam.nextCursorId,
      });
      return ret;
    },
    initialPageParam: { nextCursor: undefined, nextCursorId: undefined },
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.nextCursor) return undefined;

      return lastPage.nextCursor;
    },
  });

  const jobs = data?.pages.flatMap((page) => page.data) ?? []; // all jobs are given, but no re-render of the already existing jobs due to their key prop.

  return {
    jobs,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
}
