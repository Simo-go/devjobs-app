import toast from "react-hot-toast";
import useAuth from "../Auth/useAuth";
import { useAddBookmark } from "./useAddBookmark";
import { useRemoveBookmark } from "./useRemoveBookmark";

export function useBookmarkButton(jobId, isBookmarked) {
  const { addBookmark, isAddingBookmark } = useAddBookmark();
  const { removeBookmark, isRemovingBookmark } = useRemoveBookmark();
  const { userId, isAuthenticated } = useAuth();

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
  };
}
