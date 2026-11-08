import { useBookmarks } from "../features/bookmarks/useBookmarks";

function Bookmarks() {
  const { bookmarks, isLoadingBookmarks, bookmarkError } = useBookmarks();

  console.log(bookmarks);

  return <div>BOOKMARKStest</div>;
}

export default Bookmarks;
