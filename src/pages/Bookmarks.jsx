import clsx from "clsx";
import { useBookmarks } from "../features/bookmarks/useBookmarks";
import JobCard from "../features/jobs/JobCard";
import NoResults from "../features/jobs/NoResults";
import Container from "../ui/Container";
import GridBox from "../ui/GridBox";
import LoadingSpinner from "../ui/LoadingSpinner";
import Error from "./Error";

function Bookmarks() {
  const { bookmarks, isLoadingBookmarks, bookmarksError, refetch } =
    useBookmarks();

  const hasNoResults = bookmarks.length === 0;
  console.log("error: ", bookmarksError?.message);

  return (
    <Container
      className={`grid grid-rows-[auto_1fr] ${!hasNoResults ? "items-start" : ""} py-12`}
    >
      <h2 className="mb-16 text-preset-2 text-slate-900">Bookmarks</h2>
      {isLoadingBookmarks ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : bookmarksError ? (
        <div>
          <Error refetch={refetch} retry>
            Could not load bookmarks. Please try again.
          </Error>
        </div>
      ) : hasNoResults ? (
        <div>
          <NoResults />
        </div>
      ) : (
        <GridBox
          className={clsx(
            "grid-cols-autofill-[min(100%,18.5rem)] grid-rows-[auto_1fr_auto] content-start justify-center gap-x-4 gap-y-13.25",
            !hasNoResults && "content-start",
          )}
        >
          {bookmarks.map((bookmark) => (
            <JobCard job={bookmark} isBookmarked={true} key={bookmark.jobId} />
          ))}
        </GridBox>
      )}
    </Container>
  );
}

export default Bookmarks;
