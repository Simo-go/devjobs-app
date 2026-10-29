/* eslint-disable no-constant-condition */
import React from "react";
import Button from "../../ui/Button";
import GridBox from "../../ui/GridBox";
import JobCard from "./JobCard";
import JobsSkeleton from "./JobsSkeleton";
import { useJobs } from "./useJobs";
import { LIMIT } from "../../utils/constants";

function JobList() {
  const {
    jobs,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useJobs();
  console.log(isFetching);

  return (
    <>
      <GridBox className="gap-y-[ mt-14.25 grid-cols-autofill-[min(100%,18.5rem)] content-start gap-x-4 gap-y-13.25">
        {isPending ? (
          <JobsSkeleton numCards={LIMIT} />
        ) : (
          jobs.map((job) => <JobCard job={job} key={job.id} />)
        )}
        {isFetchingNextPage && <JobsSkeleton numCards={5} />}
      </GridBox>
      <div className="flex flex-col items-center justify-center gap-6 p-14 pb-0">
        {hasNextPage && !isFetchingNextPage && (
          <Button
            onClick={fetchNextPage}
            className="px-8 py-3"
            disabled={isFetching}
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
}

export default JobList;
