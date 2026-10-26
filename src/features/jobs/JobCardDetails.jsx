import JobLocation from "./JobLocation";
import TimeAndContractType from "./TimeAndContractType";

function JobCardDetails({ job }) {
  const { description, createdAt, contract, location } = job;

  return (
    <>
      <section className="mb-6">
        <p className="line-clamp-2 text-prest-5 leading-relaxed font-normal text-[#7F8FA4]">
          {description}
        </p>
      </section>
      <footer className="flex items-center justify-between gap-1">
        <JobLocation location={location} />
        <TimeAndContractType
          className="justify-end text-sm"
          createdAt={createdAt}
          contract={contract}
        />
      </footer>
    </>
  );
}

export default JobCardDetails;
