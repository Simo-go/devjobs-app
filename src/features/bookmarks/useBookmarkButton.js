import useUser from "../Auth/useUser";
import { useAddBookmark } from "./useAddBookmark";
import { useBookmarks } from "./useBookmarks";

export function useBookmarkButton(jobId) {
  const { addBookmark, isAddingBookmark, bookmarkError } = useAddBookmark();
  const { user, isAuthenticated } = useUser();

  const { bookmarks } = useBookmarks();

  const isBookmarked = Boolean(
    bookmarks.find((bookmark) => bookmark.jobId === jobId),
  );
  const userId = user?.id;

  return {
    addBookmark,
    isAddingBookmark,
    bookmarkError,
    userId,
    isAuthenticated,
    isBookmarked,
  };
}
