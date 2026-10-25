import Search from "../features/filters/Search.jsx";
import JobCard from "../features/jobs/JobCard";
import GridBox from "../ui/GridBox";

function Jobs() {
  return (
    <>
      <Search />
      <GridBox className="gap-y-[ mt-14.25 grid-cols-autofit-[min(100%,18.5rem)] gap-x-4 gap-y-13.25">
        {Array.from({ length: 5 }, (_, i) => (
          <JobCard key={i} />
        ))}
      </GridBox>
    </>
  );
}

export default Jobs;
