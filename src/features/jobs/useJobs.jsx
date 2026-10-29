import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useEffect } from "react";

export function useJobs() {
  const {
    data,
    error,
    isPending,
    isPaused,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    failureReason,
    fetchStatus,
    refetch,
    isFetchNextPageError,
    isLoadingError,
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
    retry: 1,
  });

  const jobs = data?.pages.flatMap((page) => page.data) ?? []; // all jobs are given, but no re-render of the already existing jobs due to their key prop.

  console.log("INFORMATION---------");
  console.log(status);
  console.log(fetchStatus);

  return {
    jobs,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    failureReason,
    isPaused,
    refetch,
    isLoadingError,
    isFetchNextPageError,
  };
}
