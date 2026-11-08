import { useQuery } from "@tanstack/react-query";
import { getBookmarkedJobIds } from "../../services/apiBookmarks";
import useUser from "../Auth/useUser";
import useAuth from "../Auth/useAuth";

export function useBookmarkedJobIds() {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
  const userId = user?.id;

  const {
    data: bookmarkedJobIds,
    isPending: isLoadingBookmarked,
    error: bookmarkedJobIdsError,
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
  } = useQuery({
    queryKey: ["bookmarkedJobIds"],
    queryFn: () => getBookmarkedJobIds({ userId }),
    enabled: isAuthenticated,
  });

  return { bookmarkedJobIds, isLoadingBookmarked, bookmarkedJobIdsError };
}
