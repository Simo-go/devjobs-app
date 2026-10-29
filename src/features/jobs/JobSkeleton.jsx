import SkeletonBox from "../../ui/SkeletonBox";

function JobSkeleton() {
  return (
    <div className="relative row-span-3 grid grid-rows-subgrid gap-0 rounded-md bg-neutral-0 px-8 pt-12 pb-5">
      <header className="mb-3 min-h-11.25">
        <SkeletonBox className="absolute top-0 left-8 size-12.5 translate-y-[-50%] rounded-2xl" />
        <SkeletonBox className="mb-1 h-3.75 w-20" />
        <SkeletonBox className="h-6.25" />
      </header>
      <section className="mb-6 min-h-11.25">
        <SkeletonBox className="h-11.25" />
      </section>
      <footer className="flex min-h-10 items-center justify-between gap-1">
        <SkeletonBox className="h-3.75 w-8.75" />
        <SkeletonBox className="h-3.75 w-25" />
      </footer>
    </div>
  );
}

export default JobSkeleton;
