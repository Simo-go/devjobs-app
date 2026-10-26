function JobCardDetails() {
  return (
    <>
      <section className="mb-6">
        <p className="line-clamp-2 text-prest-5 leading-relaxed font-normal text-[#7F8FA4]">
          Scoot is looking for a Senior Software Engineer passionate about
          building approachable, innovative and user-first experiences to join
          our small but growing Engineering team.
        </p>
      </section>
      <footer className="flex items-center justify-between gap-1">
        <address className="grow text-prest-5 text-indigo-500 not-italic">
          United Kingdom
        </address>
        <div className="flex flex-wrap items-center justify-end gap-x-2 gap-y-0 text-sm text-[#7F8FA4]">
          <span className="shrink-0 text-sm">5h ago</span>
          <span className="shrink-0">&middot;</span>
          <span className="shrink-0">Full Time</span>
        </div>
      </footer>
    </>
  );
}

export default JobCardDetails;
