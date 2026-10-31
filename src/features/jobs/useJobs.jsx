import { useInfiniteQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import { useSearchParams } from "react-router";
import { mapSearchParamsToObj } from "../../utils/helpers";

export function useJobs() {
  const [searchParams, _] = useSearchParams();

  const filters = mapSearchParamsToObj(searchParams);

  const {
    data,
    error,
    isPending,
    isPaused,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    failureReason,
    refetch,
    isFetchNextPageError,
    isLoadingError,
  } = useInfiniteQuery({
    queryKey: ["jobs", filters],
    queryFn: async ({ pageParam }) => {
      const ret = await getJobs({
        currentCursor: pageParam.nextCursor,
        currentCursorId: pageParam.nextCursorId,
        filters,
      });
      return ret;
    },
    initialPageParam: { nextCursor: undefined, nextCursorId: undefined },
    getNextPageParam: (lastPage) => {
      if (!lastPage.nextCursor) return undefined;

      return lastPage.nextCursor;
    },
    retry: 1,
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
    failureReason,
    isPaused,
    refetch,
    isLoadingError,
    isFetchNextPageError,
  };
}
