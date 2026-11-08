import { useMutation } from "@tanstack/react-query";
import { removeBookmark as apiRemoveBookmark } from "../../services/apiBookmarks";

export function useRemoveBookmark() {
  const {
    mutate: removeBookmark,
    isPending: isRemovingBookmark,
    error: removingBookmarkError,
  } = useMutation({
    mutationFn: ({ userId, jobId }) => apiRemoveBookmark({ userId, jobId }),
    onSuccess(_, __, ___, context) {
      const queryClient = context.client;
      console.log("invalidating bookmarks");
      return queryClient.invalidateQueries(["bookmarks"]);
    },
  });

  return { removeBookmark, isRemovingBookmark, removingBookmarkError };
}
