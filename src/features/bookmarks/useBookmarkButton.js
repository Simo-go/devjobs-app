import toast from "react-hot-toast";
import useUser from "../Auth/useUser";
import { useAddBookmark } from "./useAddBookmark";
import { useBookmarks } from "./useBookmarks";
import { useRemoveBookmark } from "./useRemoveBookmark";

export function useBookmarkButton(jobId) {
  const { addBookmark, isAddingBookmark } = useAddBookmark();
  const { removeBookmark, isRemovingBookmark } = useRemoveBookmark();
  const { user, isAuthenticated } = useUser();

  const { bookmarks } = useBookmarks();

  const isBookmarked = Boolean(
    bookmarks.find((bookmark) => bookmark.jobId === jobId),
  );
  const userId = user?.id;

  function handleBookmarkClick({ userId, jobId }) {
    if (isBookmarked)
      return removeBookmark(
        { userId, jobId },
        {
          onError() {
            toast.error("Could not remove bookmark, please try again.");
          },
        },
      );

    return addBookmark(
      { userId, jobId },
      {
        onError() {
          toast.error("Could not add bookmark, please try again.");
        },
      },
    );
  }

  return {
    handleBookmarkClick,
    isAddingBookmark,
    isRemovingBookmark,
    userId,
    isAuthenticated,
    isBookmarked,
  };
}
