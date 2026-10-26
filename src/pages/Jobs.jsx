import Search from "../features/filters/Search.jsx";
import JobList from "../features/jobs/JobList.jsx";
import Button from "../ui/Button.jsx";

function Jobs() {
  return (
    <>
      <Search />
      <JobList />
      <div className="flex items-center justify-center p-14 pb-0">
        <Button className="px-8 py-3">Load more</Button>
      </div>
    </>
  );
}

export default Jobs;
