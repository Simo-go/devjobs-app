import { useBookmarks } from "../features/bookmarks/useBookmarks";

function Bookmarks() {
  const bookmarks = useBookmarks();

  console.log(bookmarks);

  return <div>BOOKMARKStest</div>;
}

export default Bookmarks;
