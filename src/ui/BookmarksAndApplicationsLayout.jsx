import clsx from "clsx";
import JobCard from "../features/jobs/JobCard";
import NoResults from "../features/jobs/NoResults";
import Container from "../ui/Container";
import GridBox from "../ui/GridBox";
import LoadingSpinner from "../ui/LoadingSpinner";
import Error from "../pages/Error";

function BookmarksAndApplicationsLayout({
  pageName,
  data,
  isLoading,
  error,
  refetch,
}) {
  const hasNoResults = data.length === 0;

  return (
    <Container
      className={`grid grid-rows-[auto_1fr] ${!hasNoResults ? "items-start" : ""} py-12`}
    >
      <h2 className="mb-16 text-preset-2 text-slate-900">
        {pageName[0].toUpperCase() + pageName.slice(1)}
      </h2>
      {isLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div>
          <Error refetch={refetch} retry>
            Could not load {pageName}. Please try again.
          </Error>
        </div>
      ) : hasNoResults ? (
        <div>
          <NoResults />
        </div>
      ) : (
        <GridBox
          className={clsx(
            "grid-cols-autofill-[min(100%,18.5rem)] grid-rows-[auto_1fr_auto] justify-center gap-x-4 gap-y-13.25",
          )}
        >
          {data.map((job) => {
            return <JobCard job={job} isBookmarked={true} key={job.id} />;
          })}
        </GridBox>
      )}
    </Container>
  );
}

export default BookmarksAndApplicationsLayout;
