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
      return Promise.all([
        context.client.invalidateQueries({
          queryKey: ["bookmarks"],
        }),
        context.client.invalidateQueries({
          queryKey: ["bookmarkedJobIds"],
        }),
      ]);
    },
  });

  return { removeBookmark, isRemovingBookmark, removingBookmarkError };
}
