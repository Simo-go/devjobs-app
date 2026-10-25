import JobCard from "../features/jobs/JobCard";
import GridBox from "../ui/GridBox";

function Jobs() {
  return (
    <GridBox className="grid-cols-autofit-[min(100%,20rem)] gap-x-2.5 gap-y-12">
      {Array.from({ length: 5 }, (_, i) => (
        <JobCard key={i} />
      ))}
    </GridBox>
  );
}

export default Jobs;
