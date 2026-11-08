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

  return { addBookmark, isAddingBookmark, addingBookmarkError };
}
