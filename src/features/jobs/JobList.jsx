/* eslint-disable no-constant-condition */
import clsx from "clsx";
import Error from "../../pages/Error";
import Button from "../../ui/Button";
import GridBox from "../../ui/GridBox";
import { LIMIT } from "../../utils/constants";
import { useBookmarkedJobIds } from "../bookmarks/useBookmarkedJobIds";
import JobCard from "./JobCard";
import JobsSkeleton from "./JobsSkeleton";
import NoResults from "./NoResults";
import { useJobs } from "./useJobs";

function JobList() {
  const {
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
    isFetchNextPageError,
    isLoadingError,
  } = useJobs();

  console.log(jobs);

  const { bookmarkedJobIds, isLoadingBookmarked } = useBookmarkedJobIds();
  const bookmarkedIds = new Set(
    bookmarkedJobIds?.map((bookmarks) => bookmarks.jobId),
  );

  const isInitialLoadingPaused = isPending && isPaused && failureReason;
  const hasNoResults = jobs.length === 0;

  if (isInitialLoadingPaused)
    return (
      <>
        <Error>Waiting for connection...</Error>
      </>
    );

  if (isLoadingError)
    // initial loading error
    return (
      <Error refetch={refetch} retry>
        Please retry at a later time.
      </Error>
    );

  return (
    <>
      <GridBox
        className={clsx(
          "gap-y-[ mt-14.25 grid-cols-autofill-[min(100%,18.5rem)] gap-x-4 gap-y-13.25",
          !hasNoResults && "content-start",
        )}
      >
        {isPending ? (
          <JobsSkeleton numCards={LIMIT} />
        ) : hasNoResults ? (
          <NoResults />
        ) : (
          jobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              isBookmarked={bookmarkedIds.has(job.id)}
              isLoadingBookmarked={isLoadingBookmarked}
            />
          ))
        )}
        {isFetchingNextPage && <JobsSkeleton numCards={(LIMIT / 3) * 2} />}
      </GridBox>
      <div className="flex flex-col items-center justify-center gap-6 p-14 pb-0">
        {isFetchNextPageError && (
          <Error refetch={fetchNextPage} retry>
            Please retry at a later time.
          </Error>
        )}
        {isPaused && (
          <Error>You're offline. Loading will resume when you reconnect.</Error>
        )}
        {!isPaused &&
          !isFetchNextPageError &&
          hasNextPage &&
          !isFetchingNextPage && (
            <Button
              onClick={fetchNextPage}
              className="px-8 py-3"
              disabled={isFetching} // TO ACCOUNT FOR BG FETCHES TOO
            >
              Load more
            </Button>
          )}
      </div>
    </>
  );
}

export default JobList;
