import BookmarksAndApplicationsLayout from "../../ui/BookmarksAndApplicationsLayout";
import { useBookmarks } from "./useBookmarks";

function BookmarksLayout() {
  const { bookmarks, isLoadingBookmarks, bookmarksError, refetch } =
    useBookmarks();

  return (
    <BookmarksAndApplicationsLayout
      pageName="bookmarks"
      data={bookmarks}
      isLoading={isLoadingBookmarks}
      error={bookmarksError}
      refetch={refetch}
    />
  );
}

export default BookmarksLayout;
