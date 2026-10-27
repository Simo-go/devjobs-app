import { populateJobs } from "../../services/apiJobs";
import { supabase } from "../../services/supabase";
import GridBox from "../../ui/GridBox";
import JobCard from "./JobCard";

function JobList() {
  return (
    <GridBox className="gap-y-[ mt-14.25 grid-cols-autofit-[min(100%,18.5rem)] gap-x-4 gap-y-13.25">
      {Array.from({ length: 5 }, (_, i) => (
        <JobCard key={i} />
      ))}
    </GridBox>
  );
}

export default JobList;
