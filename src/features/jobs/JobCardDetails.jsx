import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";

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
        <JobLocation />
        <TimeAndContractType className="justify-end text-sm" />
      </footer>
    </>
  );
}

export default JobCardDetails;
