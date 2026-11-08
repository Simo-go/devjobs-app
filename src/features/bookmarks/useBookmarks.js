import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../../services/apiBookmarks";
import useAuth from "../Auth/useAuth";

export function useBookmarks() {
  const { userId } = useAuth();

  const {
    data: bookmarks,
    ispending: isLoadingBookmarks,
    error: bookmarkError,
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
  } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => getBookmarks({ userId }),
  });

  return { bookmarks, isLoadingBookmarks, bookmarkError };
}
