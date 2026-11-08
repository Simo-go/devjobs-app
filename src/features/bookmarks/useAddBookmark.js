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
      return queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
  });

  return { addBookmark, isAddingBookmark, addingBookmarkError };
}
