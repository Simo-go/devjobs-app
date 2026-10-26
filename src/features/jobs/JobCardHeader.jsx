import CompanyLogo from "./CompanyLogo";

function JobCardHeader() {
  return (
    <header className="mb-3">
      <CompanyLogo
        imgPath=""
        className="absolute top-0 left-8 translate-y-[-50%]"
      />
      <span className="mb-1 block text-prest-5 text-sm text-[.75rem] font-medium tracking-wide text-slate-500 uppercase">
        Scoot
      </span>
      <h2 className="text-preset-3 text-slate-900">Senior Software Engineer</h2>
    </header>
  );
}

export default JobCardHeader;
