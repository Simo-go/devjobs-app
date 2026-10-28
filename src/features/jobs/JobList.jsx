import { populateJobs } from "../../services/apiJobs";
import { supabase } from "../../services/supabase";
import Button from "../../ui/Button";
import GridBox from "../../ui/GridBox";
import JobCard from "./JobCard";
import { useJobs } from "./useJobs";

function JobList() {
  const { fetchNextPage, jobs } = useJobs();

  return (
    <>
      <GridBox className="gap-y-[ mt-14.25 grid-cols-autofit-[min(100%,18.5rem)] gap-x-4 gap-y-13.25">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </GridBox>
      <div className="flex items-center justify-center p-14 pb-0">
        <Button onClick={fetchNextPage} className="px-8 py-3">
          Load more
        </Button>
      </div>
    </>
  );
}

export default JobList;
