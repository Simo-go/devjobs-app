import { useMutation } from "@tanstack/react-query";
import { addBookmark as apiAddBookmark } from "../../services/apiBookmarks";

export function useAddBookmark() {
  const {
    mutate: addBookmark,
    isPending: isAddingBookmark,
    error: addingBookmarkError,
  } = useMutation({
    mutationFn: ({ userId, jobId }) => apiAddBookmark({ userId, jobId }),
    onSuccess(_, __, ___, context) {
      const queryClient = context.client;
      console.log("invalidating bookmarks");
      return queryClient.invalidateQueries(["bookmarks"]);
    },
  });

  return { addBookmark, isAddingBookmark, addingBookmarkError };
}
