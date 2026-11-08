import clsx from "clsx";
import { HiBookmark } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useBookmarkButton } from "./useBookmarkButton";
import LoadingSpinnerSmall from "../../ui/LoadingSpinnerSmall";

function BookmarkButton({ jobId, isLoadingBookmarked, isBookmarked }) {
  const {
    handleBookmarkClick,
    isAddingBookmark,
    isRemovingBookmark,
    userId,
    isAuthenticated,
  } = useBookmarkButton(jobId, isBookmarked);

  if (!isAuthenticated) return null;

  return (
    <Button
      className="absolute top-4 right-4 bg-transparent p-1.5! hover:bg-transparent disabled:bg-transparent"
      onClick={() => handleBookmarkClick({ userId, jobId })}
      disabled={isAddingBookmark || isRemovingBookmark}
    >
      {isAddingBookmark || isRemovingBookmark || isLoadingBookmarked ? (
        <LoadingSpinnerSmall size={24} color="var(--color-indigo-500)" />
      ) : (
        <HiBookmark
          size={24}
          color="var(--color-slate-200)"
          className={clsx(
            isBookmarked ? "text-indigo-500!" : "hover:text-slate-300/80!",
          )}
        />
      )}
    </Button>
  );
}

export default BookmarkButton;
