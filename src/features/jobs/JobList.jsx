/* eslint-disable no-constant-condition */
import { unstable_HistoryRouter, useLocation } from "react-router";
import Error from "../../pages/Error";
import Button from "../../ui/Button";
import GridBox from "../../ui/GridBox";
import { LIMIT } from "../../utils/constants";
import JobCard from "./JobCard";
import JobsSkeleton from "./JobsSkeleton";
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

  const isInitialLoadingPaused = isPending && isPaused && failureReason;

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
      <GridBox className="gap-y-[ mt-14.25 grid-cols-autofill-[min(100%,18.5rem)] content-start gap-x-4 gap-y-13.25">
        {isPending ? (
          <JobsSkeleton numCards={LIMIT} />
        ) : (
          jobs.map((job) => <JobCard job={job} key={job.id} />)
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
