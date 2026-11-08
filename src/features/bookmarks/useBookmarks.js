import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../../services/apiBookmarks";

export function useBookmarks() {
  const {
    data: bookmarks,
    ispending: isLoadingBookmarks,
    error: bookmarkError,
  } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarks,
  });

  return { bookmarks, isLoadingBookmarks, bookmarkError };
}
