import { useBookmarks } from "../features/bookmarks/useBookmarks";
import JobCard from "../features/jobs/JobCard";
import Container from "../ui/Container";

function Bookmarks() {
  const { bookmarks = [], isLoadingBookmarks, bookmarkError } = useBookmarks();

  console.log(bookmarks);

  return (
    <Container className="py-12">
      <h2 className="text-preset-2 text-slate-900">Bookmarks</h2>
      {bookmarks.map((bookmark) => (
        <JobCard job={bookmark} isBookmarked={true} key={bookmark.jobId} />
      ))}
    </Container>
  );
}

export default Bookmarks;
